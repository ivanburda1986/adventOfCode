/* X-Y
R 4:
h:  0-0,   1-0, 2-0, 3-0, 4-0
t: (0-0), (0-0), 1-0, 2-0, 3-0    -----> 00, 10, 20, 30 => 4

if(R && H


U 4
h:  4-1,  4-2, 4-3, 4-4
t: (3-0), 4-1, 4-2, 4-3           -----> 41, 42, 43 => 3

L 3
h:  3-4,  2-4, 1-4
t: (4-3), 3-4, 2-4                -----> 34, 24 => 2

D 1
h: 1-3
t: (2-4)

R 4
h:  2-3,  3-3, 4-3, 5-3
t: (2-4) (2-4) 3-3, 4-3           -----> 33, (43) => 1


D 1
h:  5-2
t: (4-3)

L 5
h:  4-2,  3-2, 2-2, 1-2, 0-2
t: (4-3) (4-3) 3-2, 2-2, 1-2     -----> 32, 22, 12 => 3


R 2
h:  1-2,  2-2
t: (1-2) (1-2)

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

    return 1;
};

