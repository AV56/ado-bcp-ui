import { Component, ViewEncapsulation } from '@angular/core';
import { ScreenId } from '../constants/report-constant';

/* eslint-disable */

@Component({
  selector: 'ado-bcp-ui-report',
  template: `<ado-bcp-ui-sidebar></ado-bcp-ui-sidebar>
    <ado-bcp-ui-header></ado-bcp-ui-header>
    <ado-bcp-ui-table from="{{ show }}"></ado-bcp-ui-table>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ReportComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
