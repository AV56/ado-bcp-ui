import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';
import { SharedComponentModule } from '@ado-bcp-ui/shared-component';
import { LayoutModule } from '@ado-bcp-ui/layout';
import { NotificationComponent } from '../components/notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    SharedComponentModule,
    LayoutModule,
    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {}
