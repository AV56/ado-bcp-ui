import { Component } from '@angular/core';
import { ScreenId } from '../constants/integration-constant';

@Component({
  selector: 'ado-bcp-ui-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
})
export class IntegrationComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
