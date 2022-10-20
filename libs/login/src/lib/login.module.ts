import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { SharedServiceModule } from '@ado-bcp-ui/shared-service';
import { Config } from './constants/config';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: Config.CLIENTID,
      redirectUri: Config.REDIRECTURI,
    },
  });
}
@NgModule({
  imports: [CommonModule, MsalModule, SharedServiceModule],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
})
export class LoginModule {}
