import { Component } from '@angular/core';
import { ScreenId } from '../constants/report-constant';

@Component({
  selector: 'ado-bcp-ui-restore-report',
  template: `<ado-bcp-ui-table from="{{ show }}"></ado-bcp-ui-table>
    <ado-bcp-ui-sidebar></ado-bcp-ui-sidebar>
    <ado-bcp-ui-header></ado-bcp-ui-header>`,
})
export class RestoreReportComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_RESTORE_REPORT;
  }
}
