import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersistenceModule, PersistenceService } from "angular-persistence";

import { AppComponent } from './app.component';
import { CisComponent } from './cis/cis.component';
import { AppRoutingModule } from './app-routing.module';
import { DataClientService } from './data-client.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { CisSettingsService } from './cis-settings.service';
import { PlanComponent } from './plan/plan.component';
import { UtcComponent } from './utc/utc.component';
import { DfyComponent } from './dfy/dfy.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CisComponent,
    HomeComponent,
    PlanComponent,
    UtcComponent,
    DfyComponent,
    SupportComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PersistenceModule
  ],
  providers: [
    CisSettingsService,
    DataClientService,
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
