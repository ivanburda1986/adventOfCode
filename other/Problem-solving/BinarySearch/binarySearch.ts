export function binarySearch(sortedArr: number[], value: number) {
    let pointer1 = 0;
    let pointer2 = sortedArr.length - 1;

    let middle = Math.floor((pointer2 - pointer1) / 2);

    while (pointer2 - pointer1 >= 2) {
        if (value === sortedArr[middle]) {
            return middle;
        }
        if (value === sortedArr[pointer1]) {
            return pointer1;
        }
        if (value === sortedArr[pointer2]) {
            return pointer2;
        }
        if (value > sortedArr[middle]) {
            pointer1 = middle;
            middle = Math.floor((pointer2 + pointer1) / 2);

        } else {
            pointer2 = middle;
            middle = Math.floor((pointer2 - pointer1) / 2);

        }
    }
    return -1;
}