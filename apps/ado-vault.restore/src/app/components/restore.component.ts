import { Component } from '@angular/core';
import { ScreenId } from '../constants/restore-constant';

@Component({
  selector: 'ado-bcp-ui-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
