/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { ScreenId } from '../../constants/dashboard-constant';

@Component({
  selector: 'maritech-storage-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
