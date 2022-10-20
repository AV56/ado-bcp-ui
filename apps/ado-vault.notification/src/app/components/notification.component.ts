import { Component } from '@angular/core';
import { ScreenId } from '../constants/notification-constant';

@Component({
  selector: 'ado-bcp-ui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
