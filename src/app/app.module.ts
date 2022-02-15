import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MsalGuard, MsalInterceptor, MsalModule} from "@azure/msal-angular";
import {MSALGuardConf, MSALInstance, MSALInterceptorConf} from "./msal/msal.config";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MsalModule.forRoot(MSALInstance, MSALGuardConf, MSALInterceptorConf),
    MatToolbarModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
