import { Component } from '@angular/core';
import { ScreenId } from '../../constants/role-constant';

@Component({
  selector: 'ado-bcp-ui-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
