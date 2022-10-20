import { Component } from '@angular/core';
import { ScreenId } from '../constants/storage-constant';

@Component({
  selector: 'ado-bcp-ui-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
