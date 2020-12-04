import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
export const adalConfig = {
  tenant: 'c53d311b-c6fa-4eae-8b4f-e42dc6849524',
  clientId: 'c3169392-c4a6-4f35-848e-bbdc5df32c2f',
  endpoints: {
    api: 'https://graph.microsoft.com',
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: 'http://www.google.com.br'
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
 