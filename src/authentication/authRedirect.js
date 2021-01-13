// // Create the main myMSALObj instance
// // configuration parameters are located at authConfig.js
// import { PublicClientApplication, InteractionRequiredAuthError } from "@azure/msal-browser"
// import { msalConfig, loginRequest, tokenRequest } from "./authConfig"
// import { graphConfig } from "./graphConfig"
// import { callMSGraph } from "./graph"

// const myMSALObj = new PublicClientApplication(msalConfig);


// // Redirect: once login is successful and redirects with tokens, call Graph API
// myMSALObj.handleRedirectPromise()
//     .then(handleResponse)
//     .catch((error) => {
//         console.error(error);
//     });

// function handleResponse(resp) {
//     if (resp !== null) {
//         document.cookie=`username=${resp.account.username}`;
//         window.location.reload();
//     } else {
//         /**
//          * See here for more info on account retrieval:
//          * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
//          */
//         const currentAccounts = myMSALObj.getAllAccounts();
//         if (!currentAccounts || currentAccounts < 1) {
//             signIn();
//         } else if (currentAccounts.length > 1) {
//             // Add choose account code here\
//             console.warn("Multiple accounts detected.");
//         } else if (currentAccounts.length === 1) {
//             document.cookie = `username=${currentAccounts[0].username}`;
//         }
//     }
// }

// function signIn() {
//     myMSALObj.loginRedirect(loginRequest);
// }

// function signOut() {
//     const logoutRequest = {
//         account: myMSALObj.getAccountByUsername(getCookie('username'))
//     };

//     myMSALObj.logout(logoutRequest);
// }

// function getTokenRedirect(request) {
//     /**
//      * See here for more info on account retrieval:
//      * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
//      */
//     request.account = myMSALObj.getAccountByUsername(getCookie('username'));

//     return myMSALObj.acquireTokenSilent(request)
//                 .catch(error => {
//                     console.warn("silent token acquisition fails. acquiring token using redirect");
//                     if (error instanceof InteractionRequiredAuthError) {
//                         // fallback to interaction when silent call fails
//                         return myMSALObj.acquireTokenRedirect(request);
//                     } else {
//                         console.warn(error);
//                     }
//                 });
// }

// function seeProfile() {
//     getTokenRedirect(loginRequest).then(response => {
//         callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, (data, endpoint) => {
//         });

//     }).catch(error => {
//         console.error(error);
//     });
// }

// function readMail() {
//     getTokenRedirect(tokenRequest).then(response => {
//         callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, (data, endpoint) => {
//         });

//     }).catch(error => {
//         console.error(error);
//     });
// }

// window.myMSALObj=myMSALObj;
// function userInfo(callback) {

//     getTokenRedirect(loginRequest)
//     .then(response => {window.response=response; callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, callback); })
//     .catch(error => { console.log(error) });        


// }

// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   }