import MD5 from "crypto-js/md5";

export const getLowestSuitableNumber = (secretKey: string, requiredMD5HashStart: string): number => {
    let numberFound = false;
    let number = 0;

    for (let i = number; !numberFound; i++) {
        const md5Hash = MD5(`${secretKey}${i}`);
        if (String(md5Hash).substring(0, requiredMD5HashStart.length) === requiredMD5HashStart) {
            numberFound = true;
            number = i;
        }
    }
    return number;
};