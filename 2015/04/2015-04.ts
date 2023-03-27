import * as crypto from "crypto";

export const getLowestSuitableNumber = (secretKey: string, requiredMD5HashStart: string): number => {
    for (let i = 0; true; i++) {
        const md5Hash = crypto.createHash('md5').update(`${secretKey}${i}`).digest('hex');
        if (md5Hash.startsWith(requiredMD5HashStart)) {
            return i;
        }
    }
};