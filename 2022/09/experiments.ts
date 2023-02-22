/* XY
R 4:
h:  00,   10, 20, 30, 40
t: (00), (00), 10, 20, 30    ----> 00, 10, 20, 30 => 4
                                if (R && diff===0)  -> nothing
                                if (R && diff===10) -> nothing
                                if (R && diff===20) -> t.add(hXY-10)


U 4
h:  41,  42, 43, 44
t: (30), 41, 42, 43           ----> 41, 42, 43 => 3
                                if(U && diff===11) -> nothing
                                if(U && diff===12) -> t.add(hXY-1)
                                if(U && diff===2)  -> t.add(hXY-1)



L 3
h:  34,  24, 14
t: (43), 34, 24                ----> 34, 24 => 2
                                if(L && diff===-9) -> nothing
                                if(L && diff===-19) -> t.add(hXY+10)
                                if(L && diff===-20) -> t.add(hXY+10)

D 1
h:  13
t: (24)                        ------>
                                 if(D && diff===-9) -> nothing

R 4
h:  23,  33, 43, 53
t: (24) (24) 33, 43           ----> 33, (43) => 1
                                if(R && diff===-1) -> nothing
                                if(R && diff===9) -> nothing
                                if(R && diff===19) -> t.add(hXY-10)
                                if(R && diff===20) -> t.add(hXY-10)

D 1
h:  52
t: (43)                       ------>
                                if(R&& diff===9) -> nothing

L 5
h:  42,  32, 22, 12, 02
t: (43) (43) 32, 22, 12      ----> 32, 22, 12 => 3
                              if(L && diff===-1) -> nothing
                              if(L && diff===-11) -> nothing
                              if(L && diff===-21) -> t.add(hXY+10)
                              if(L && diff===-20) -> t.add(hXY+10)

R 2
h:  12,  22
t: (12) (12)                 ------>
                               if(R && diff===0) -> nothing
                               if(R && diff===10) -> nothing

......
......
......
......
H.....

..##..
...##.
.####.
....#.
s###..

=13 positions the tail visited at least once

How many positions does the tail of the rope visit at least once?
 */

export const getTailTouchedPositions = (input: string): number => {
    const letters: string[] = [];
    const uDiff = new Set();
    const rDiff = new Set();
    const dDiff = new Set();
    const lDiff = new Set();
    input.split("\n").forEach(line => {
        const [letter, count] = line.split(" ");
        for (let i = 0; i < Number(count); i++) {
            letters.push(letter);
        }
    });
    let tailSet = new Set();
    let head = 0;
    let tail = 0;
    let horizontalMap = new Map();
    horizontalMap.set(-21, 10);
    horizontalMap.set(-20, 10);
    horizontalMap.set(-19, 10);
    horizontalMap.set(-11, 0);
    horizontalMap.set(-9, 0);
    horizontalMap.set(-1, 0);
    horizontalMap.set(0, 0);
    horizontalMap.set(9, 0);
    horizontalMap.set(10, 0);
    horizontalMap.set(19, -10);
    horizontalMap.set(20, -10);
    horizontalMap.set(21, -10);
    let verticalMap = new Map();
    verticalMap.set(-12, 1);
    verticalMap.set(-11, 0);
    verticalMap.set(-9, 0);
    verticalMap.set(-2, 1);
    verticalMap.set(2, -1);
    verticalMap.set(9, 0);
    verticalMap.set(11, 0);
    verticalMap.set(12, -1);

    letters.forEach((letter) => {
        if (letter === "R") {
            head += 10;
            let diff = head - tail;
            rDiff.add(diff);
            let change = 0;
            if (horizontalMap.get(diff)) {
                change = horizontalMap.get(diff);
            }
            if (change > 0 || change < 0) {
                tail = head + change;
                tailSet.add(tail + change);
            }
        }
        if (letter === "L") {
            head -= 10;
            let diff = head - tail;
            lDiff.add(diff);
            let change = 0;
            if (horizontalMap.get(diff)) {
                change = horizontalMap.get(diff);
            }
            if (change > 0 || change < 0) {
                tail = head + change;
                tailSet.add(head + change);

            }
        }
        if (letter === "U") {
            head += 1;
            let diff = head - tail;
            uDiff.add(diff);
            let change = 0;
            if (verticalMap.get(diff)) {
                change = verticalMap.get(diff);
            }
            if (change > 0 || change < 0) {
                tail = head + change;
                tailSet.add(head + change);

            }
        }
        if (letter === "D") {
            head -= 1;
            let diff = head - tail;
            dDiff.add(diff);
            let change = 0;
            if (verticalMap.get(diff)) {
                change = verticalMap.get(diff);
            }
            if (change > 0 || change < 0) {
                tail = head + change;
                tailSet.add(tail + change);

            }
        }
    });

    return tailSet.size;
};
