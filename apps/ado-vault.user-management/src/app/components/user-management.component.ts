import { Component } from '@angular/core';
import { ScreenId } from '../constants/user-management-constant';

@Component({
  selector: 'ado-bcp-ui-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
}
}
