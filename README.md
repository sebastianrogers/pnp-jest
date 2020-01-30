# pnp-jest

Examples of how to unit test PnP via Jest

Based on (<https://pnp.github.io/pnpjs/nodejs-support/)>.

## Getting Started

Initialise the project.

```bash
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

```bash
yarn test
```

Install the VSCode Jest extension orta.vscode-jest.

Enjoy debugging SharePoint integration tests.
