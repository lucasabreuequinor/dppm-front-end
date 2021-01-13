// const msalConfig = {
//   auth: {
//     clientId: "e259013d-e60a-4994-9ea1-bc137592985c",
//     authority: "https://login.microsoftonline.com/c53d311b-c6fa-4eae-8b4f-e42dc6849524",
//     redirectUri: "http://localhost:1433",
//     postLogoutRedirectUri: "http://localhost:1433"
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   }
// };

// // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
// const loginRequest = {
//  scopes: ["openid", "profile", "User.Read"]
// };

// // Add scopes here for access token to be used at Microsoft Graph API endpoints.
// const tokenRequest = {
//  scopes: ["User.Read", "Mail.Read"]
// };

// export {
//   msalConfig,
//   loginRequest,
//   tokenRequest     
// }