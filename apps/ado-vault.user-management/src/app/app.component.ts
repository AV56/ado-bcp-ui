import { Component } from '@angular/core';
import { ScreenId } from './constants/user-management-constant';

@Component({
  selector: 'ado-bcp-ui-root',
  template: '<ado-bcp-ui-table from="{{ show }}"></ado-bcp-ui-table>',
})
export class AppComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
