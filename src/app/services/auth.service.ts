import {Inject, Injectable} from '@angular/core';
import {MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService} from '@azure/msal-angular';
import {AuthenticationResult, PopupRequest} from '@azure/msal-browser';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";


@UntilDestroy()
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public authenticated = false;

  constructor(private msalService: MsalService, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration) {
    this.isSignedIn();
  }

  // Prompt the user to sign in and
  // grant consent to the requested permission scopes
  async signIn() {
    await this.msalService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: async (authResult) => {
          this.setActiveAccount(authResult);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  signOut() {
    this.msalService.logoutPopup({
      mainWindowRedirectUri: '/'
    });
  }

  setActiveAccount(authResult: AuthenticationResult) {
    this.msalService.instance.setActiveAccount(authResult.account);
    this.isSignedIn(); // authenticated is true
  }

  isSignedIn() {
    this.authenticated = this.msalService.instance.getActiveAccount() !== null;
  }
}
