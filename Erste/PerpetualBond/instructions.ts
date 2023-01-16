// Bond price: 10 EUR
// Purchase, yielded -> 3 days to process and assign
// After assignment a bond yields another bond in 7 days

//Mainframe query result:
// Bond PSB#00000001 sold 6 days ago
// Bond PSB#00000002 sold 6 days ago
// Bond PSB#00000003 sold 5 days ago
// Bond PSB#00000004 sold 5 days ago
// Bond PSB#00000005 sold 5 days ago
// Bond PSB#00000006 sold 4 days ago
// Bond PSB#00000007 sold 3 days ago
// Bond PSB#00000008 sold 2 days ago

// As the first Bond was sold 6 days ago, you calculate that they will each yield a new Bond in 4 days.
// The total value of the Bonds sold so far is 8 x 10 Euros = 80 Euros.
// In 4 days when 2 more bonds are yielded, the total value will be 10 x 10 Euros = 100 Euros.
// How long will it take until the Perpetual Saving Bonds total value surpasses Erste Groups's total current assets (272 billion Euros)?

//Algorithm
// Initialise:
// -days since selling of bonds started: 6
// -array of existing bonds
// -total bonds count: 8

// Each day:
// -setup array to collect new bonds
// Go through existing bonds and for each:
// -increase maturity of each bond by 1
// -take maturity, deduct 3 for the assigning period, if remainder %7 === 0, create a new bond
// -count all assigned bonds, i.e. with maturity >= 3, and multiply them by 10 to get the total value of issued bonds
// -if total value > 272,000,000,000 then return the number of days since selling of bonds started