export const naiveStringSearch = (searched: string, full: string): number => {


    let count = 0;
    for (let fpos = 0; fpos < full.length; fpos++) {
        for (let spos = 0; spos < searched.length; spos++) {
            if (full[fpos + spos] !== searched[spos]) {
                break;
            }
            if (spos === searched.length - 1) {
                count += 1;
            }
        }
    }
    return count;


};