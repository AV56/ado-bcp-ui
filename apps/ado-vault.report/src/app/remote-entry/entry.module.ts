import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportComponent } from '../components/report.component';
import { remoteRoutes } from './entry.routes';
import { SharedComponentModule } from '@ado-bcp-ui/shared-component';
import { LayoutModule } from '@ado-bcp-ui/layout';
import { BackupReportComponent } from '../components/backup-report.component';
import { RestoreReportComponent } from '../components/restore-report.component';
import { UserLogReportComponent } from '../components/user-log-report.component';

@NgModule({
  declarations: [
    ReportComponent,
    BackupReportComponent,
    RestoreReportComponent,
    UserLogReportComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    LayoutModule,
    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {}
