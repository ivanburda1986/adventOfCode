// On your first day working in the **George Team**, you decide to visit the **Erste Campus Kantine** for lunch as you heard they are serving **Wiener Schnitzel** today.
// On your way there, you run into one of the new Analyst from **Group Markets Department**. He explains to you his great idea: **Perpetual Saving Bonds**. Customers will be able to earn so much money with it! You can buy a Bond of for just **2 Euros**.
// After they bought the Bond, it takes **3 days** to process the transaction and assign them. When they are assigned, every **7 days** the Bond yields another Bond for free. (For the new Bonds it also takes 3 days to be assigned.)
// Our Mainframe can create an infinite amount of such Bonds! Your colleague also explains that he already sold some Bond last week.
// After lunch, you decide to investigate the case of the **Perpetual Saving Bonds** a bit further and run a query on the mainframe for a list of Bonds sold so far. You receive this list:

// Bond PSB#00000001 sold 6 days ago
// Bond PSB#00000008 sold 2 days ago
// Bond PSB#00000003 sold 5 days ago
// Bond PSB#00000002 sold 6 days ago
// Bond PSB#00000004 sold 5 days ago
// Bond PSB#00000006 sold 4 days ago
// Bond PSB#00000007 sold 3 days ago
// Bond PSB#00000005 sold 5 days ago

// As the first Bond was sold **6 days** ago, you calculate that they will each yield a new Bond in **4 days**.
// The total value of the Bonds sold so far is **8 x 2 Euros = 16 Euros**.
// In 4 days when 2 more bonds are yielded, the total value will be **10 x 2 Euros = 20 Euros**.

// QUESTIONS:
// How long will it take until the Perpetual Saving Bonds total value surpasses Erste Groups's total current assets (272 billion Euros)?
// How much will be  the total value of all Bonds in 1 year?

//Algorithm
// Initialise:
// -days since selling of bonds started: 6
// -a record of issued bonds
// -total bonds count: 8

// Each day:
// -setup array to collect new bonds
// Go through existing bonds and for each:
// -increase maturity of each bond by 1
// -take maturity, deduct 3 for the assigning period, if remainder %7 === 0, create a new bond
// -count all assigned bonds, i.e. with maturity >= 3, and multiply them by 10 to get the total value of issued bonds
// -if total value > 272,000,000,000 then return the number of days since selling of bonds started
