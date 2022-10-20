import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MsalLoginComponent} from './components/msal-login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LoginModule } from '@ado-bcp-ui/login';
import { LayoutModule } from '@ado-bcp-ui/layout';
import { SharedComponentModule } from '@ado-bcp-ui/shared-component';

@NgModule({
  declarations: [AppComponent, MsalLoginComponent],
  imports: [
    BrowserModule,
    LoginModule,
    LayoutModule,
    SharedComponentModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
