export const environment = {
  production: true,
  clientId: 'APPLICATION-ID (CLIENT-ID)',
  webAPI: 'YOUR-WEB-API-URL',
  redirectUri: 'CLIENT-REDIRECT-URL (THE SAME CONFIGURED IN AZURE AD FOR YOUR SPA)', // use common if your app is configured for multi-tenant
  authority: 'https://login.windows.net/PUT-YOUR-TENANT-ID-HERE',
  msGraphAPI: 'https://graph.microsoft.com'
};
