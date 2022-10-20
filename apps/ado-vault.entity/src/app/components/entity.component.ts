import { Component } from '@angular/core';
import { ScreenId } from '../constants/entity-constant';


@Component({
  selector: 'ado-bcp-ui-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent {
  show: any;
  constructor() {
    this.show = ScreenId.WELCOME_SCREEN;
  }
}
