![SuperTokens banner](https://raw.githubusercontent.com/supertokens/supertokens-logo/master/images/Artboard%20%E2%80%93%2027%402x.png)

# SuperTokens ThirdParty + Passwordless 2fa demo

This demo app demonstrates how we can implement sign in with google workspaces and then add SMS OTP based 2FA on top of that.

## Changes

-   On the frontend, we add a custom provider for sign in with google workspaces
-   We initialise Passwordless recipe on the frontend and backend as per its quick setup
-   To disable sign ups via google workspaces login, we override the `signInUpPOST` API call as shown in `api-server/customSignInUpPOST.js` file.

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Run the demo app

This compiles and serves the React app and starts the backend API server on port 3001.

```bash
npm run dev
```

The app will start on `http://localhost:3000`

If you would like to modify the website (http://localhost:3000) or the API server (http://localhost:3001) URL:

-   Change the `apiPort` or `apiDomain` values in `api-server.js`
-   Change the `apiPort` or `apiUrl` values in `src/App.js`
-   Change the `websitePort` or `websiteDomain` values in `api-server.js`
-   Change the `websitePort` or `websiteUrl` values in `src/App.js`

## Project structure & Parameters

-   The frontend code is located in the `src` folder.
-   The backend API is in the `api-server.js` file.

## Production build

```bash
npm run build && npm run start
```

## Current drawbacks:

-   Lack of context passing in backend API forces copying of backend logic
-   It's confusing that we use `ThirdPartyAuth` wrapper and not `PasswordlessAuth` wrapper. It should be possible to just use `SessionAuth` only.

## Author

Created with :heart: by the folks at SuperTokens.io.

## License

This project is licensed under the Apache 2.0 license.
