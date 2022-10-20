import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';
import { LayoutModule } from '@ado-bcp-ui/layout';
import { SharedComponentModule } from '@ado-bcp-ui/shared-component';
import { RoleComponent } from '../components/role/role.component';

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedComponentModule,
    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {}
