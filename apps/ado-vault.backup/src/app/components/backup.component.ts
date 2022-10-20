import { Component } from '@angular/core';
import { ScreenId } from '../constants/backup.constant';

@Component({
  selector: 'ado-bcp-ui-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss'],
})
export class BackupComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
