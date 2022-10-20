import { Component } from '@angular/core';
import { ScreenId } from '../constants/company-constant';

@Component({
  selector: 'ado-bcp-ui-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
