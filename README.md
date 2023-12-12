# pnp-jest

Examples of how to unit test [PnPJS](https://pnp.github.io/pnpjs) via [Jest](https://jestjs.io/).

Shows how to:

- set up VSCode Jest support to allow retesting of successful tests.
- exclude tests so that expensive integration tests can become only run on demand.

This was updated to use PnPJS V3 from an original that used [PnPJS V2](https://pnp.github.io/pnpjs/transition-guide/).

## Getting Started

Ensure that you are using Node 14, 16, 18.

```sh
nvm install 18
nvm use 18
```

Initialise the project.

```sh
yarn
```

Create an SP Add-In (<https://pnp.github.io/pnpjs/debugging/#register-an-add-in)>.

Create a .env file to allow connecting to your environment.

```.env
SP_URL=<URL>
SP_CLIENT_ID=<ID>
SP_CLIENT_SECRET=<SECRET>
```

Test the project

```sh
yarn test
```

Install the VSCode Jest extension orta.vscode-jest.

Enjoy debugging SharePoint integration tests.
