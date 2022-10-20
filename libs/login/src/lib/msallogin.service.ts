/* eslint-disable @angular-eslint/contextual-lifecycle */
import { AuthGuardService } from '@ado-bcp-ui/auth-guards';
import { SharedService } from '@ado-bcp-ui/shared-service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class MSALLoginService {
  userDetails!: any;

  constructor(
    private sharedService: SharedService,
    private msalService: MsalService,
    private router: Router,
    private authGuardService: AuthGuardService
  ) {}

  msallogin() {
    this.msalService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.userDetails = res.account;
        this.msalService.instance.setActiveAccount(res.account);
        localStorage.setItem('userDetails', this.userDetails);
        this.sharedService.event.next(this.userDetails);
        this.authGuardService.login(this.userDetails);
        this.router.navigate(['/ado-vault.dashboard']);
      } else {
        localStorage.setItem('userDetails', 'undefined');
        this.msalService.loginRedirect();
      }
    });
  }
}
