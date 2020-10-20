# Fiserv Promise Based Requests

This is an Open Source Project, feel free to use and pull request.

_**Still work in progress**_

## Usage

```
yarn add fiserv-js
```

### Payments

#### `createPayment`

```js
import { setConfig, payments } from 'fiserv-js';

setConfig({
  isProduction: false,
  apiKey: 'YOUR-API-KEY',
  secret: 'YOUR-SECRET',
});

const createPayment = async () => {
  try {
    const { data } = await payments.create({
      requestType: "PaymentCardPreAuthTransaction", // Look for TransactionRequestType
      transactionAmount: {
        total: '1000',
        currency: "MXN",
      },
      paymentMethod: {
        number: 'xxxxxxxxxxx';
        securityCode: 'xxx';
        expiryDate: {
          month: '12'
          year: '22'
        };,
      },
    });
  } catch (error) {
    console.log('do smt with me', error)
  }
}

```

#### `secondaryTransaction`

#### `transactionInquiry`

#### `finalizeSecureTransaction`

### Tokens

#### `create`

#### `del`

# Colaborate & Improve

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.
IMPORTANT NOTE: Check out the tests, you need to use your own SECRET & API_KEY

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

A simple action is included that runs these steps on all pushes:

- Installs deps w/ cache
- Lints, tests, and builds

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
