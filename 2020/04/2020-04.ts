export const getValidPassportCount = (input: string): number =>
    getPassportsWithRequiredFields(input).length;

export const getPassportsWithRequiredFields = (input: string): string[] =>
    input.split('\n\n').filter(passport => {
        const reqKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
        return reqKeys.every(key => passport.includes(key));
    });

const validate: Record<string, (fieldValue: string) => boolean> = {
    byr: (value: string) => Number(value) >= 1920 && Number(value) <= 2002,
    iyr: (value: string) => Number(value) >= 2010 && Number(value) <= 2020,
    eyr: (value: string) => Number(value) >= 2020 && Number(value) <= 2030,
    hgt: (value: string) => {
        if (value.includes("cm")) {
            const cm = Number(value.replace("cm", ""));
            return cm >= 150 && cm <= 193;
        }
        if (value.includes("in")) {
            const inch = Number(value.replace("in", ""));
            return inch >= 59 && inch <= 76;
        }
        return false;
    },
    hcl: (value: string) => (/^#[0-9a-f]{6}$/).test(value),
    ecl: (value: string) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value),
    pid: (value: string) => /^\d{9}$/.test(value),
    cid: () => true
};

//"One-liner"
export const getValidPassportCount2 = (input: string) =>
    getPassportsWithRequiredFields(input)
        .map(pass => pass.split('\n\n')
            .map(passport => passport.replace(/\n/g, ' ')))
        .map(subArray => subArray[0])
        .map(passport => passport.split(" ")
            .filter(Boolean)).filter(parsedPass => parsedPass
        .every(part => {
            const [name, value] = part.split(":");
            return validate[name]?.(value);
        })).length;

//"Multi-line, better readability"
export const getValidPassportCount2b = (input: string) => {
    const passportsWithRequiredFields = getPassportsWithRequiredFields(input).map(pass => pass.split('\n\n').map(passport => passport.replace(/\n/g, ' '))).map(subArray => subArray[0]);
    const parsedPassports = passportsWithRequiredFields.map(passport => passport.split(" ").filter(Boolean));

    return parsedPassports.filter(parsedPass => parsedPass.every(part => {
        const [name, value] = part.split(":");
        return validate[name]?.(value);
    })).length;
};
