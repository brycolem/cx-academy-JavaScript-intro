# js-intro assignment

This assignment will test your knowledge of javascript basics.

Your task is to write the logic for the documented methods of the following files:
- `src/baseDataService.js`
- `src/dataService.js`

When complete, all of the tests defined in `tests` directory will pass.

To get started, run `npm i`, then `npm start`. This will execute code found in the `src/run.js` file. This file is not used by the tests so you can modify it as you please for debugging purposes.

At first, the program will have errors. It is recommended to comment out sections of the code until the program runs successfully. Then, proceed to write the method logic.

To run the tests to check your work:
```
npm run test
```

To check your code for linting mistakes, run:
```
npm run lint
```

You will be interacting with an array of data found in `src/dataset.js`. The structure of the data is as follows:
```json
[
  {
    "disclosure_year": 2021,
    "disclosure_date": "10/04/2021",
    "transaction_date": "2021-09-27",
    "owner": "joint",
    "ticker": "BP",
    "asset_description": "BP plc",
    "type": "purchase",
    "amount": "$1,001 - $15,000",
    "representative": "Hon. Virginia Foxx",
    "district": "NC05",
    "ptr_link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20019557.pdf",
    "cap_gains_over_200_usd": false,
    "id": "99a7cc1b-7263-4951-8eee-778da58e1a3c"
  },
  ...
]
```


### Assessment
The assignment will be graded using the following criteria:
1. Unit tests pass.
2. Linting checks pass.

#### Concepts
- Classes and Inheritance
- Deep-Cloning Arrays and Objects
- Sets for distinct grouping
- Getters/Setters
- Array manipulation with native Array methods
- The rest parameter
- The `this` keyword
- Built-in Math methods
- String formatting
