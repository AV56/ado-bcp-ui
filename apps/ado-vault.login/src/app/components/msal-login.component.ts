import { Component, ViewEncapsulation } from '@angular/core';
import { MSALLoginService } from '@ado-bcp-ui/login';

/* eslint-disable */

@Component({
  selector: 'ado-bcp-msal-login',
  template: ``,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MsalLoginComponent {
  constructor(private msalLoginService: MSALLoginService) {
    this.msalLoginService.msallogin();
  }
}
