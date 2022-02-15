import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  PublicClientApplication
} from "@azure/msal-browser";
import {MsalGuardConfiguration, MsalInterceptorConfiguration} from "@azure/msal-angular";
import {environment as e} from "../../environments/environment.prod";
import {API_SCOPES, APPLICATION_SCOPES, MS_GRAPH_SCOPES} from "./msal-scopes";

export const MSALInstance: IPublicClientApplication = new PublicClientApplication(
  {
    auth: {
      clientId: e.clientId,
      authority: e.authority,
      redirectUri: e.redirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: true
    }
  }
);

export const MSALGuardConf: MsalGuardConfiguration = {
  interactionType: InteractionType.Popup,
  authRequest: {
    scopes: APPLICATION_SCOPES
  }
};

export const MSALInterceptorConf: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Popup,
  protectedResourceMap: new Map([ // protected resources that need access token
    [e.msGraphAPI, MS_GRAPH_SCOPES],
    [e.webAPI, API_SCOPES],
  ])
}

