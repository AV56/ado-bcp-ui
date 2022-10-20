import { Route } from '@angular/router';
import { BackupReportComponent } from '../components/backup-report.component';
import { ReportComponent } from '../components/report.component';
import { RestoreReportComponent } from '../components/restore-report.component';
import { UserLogReportComponent } from '../components/user-log-report.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ReportComponent },
  { path: 'backupReport', component: BackupReportComponent },
  { path: 'restoreReport', component: RestoreReportComponent },
  { path: 'userLogReport', component: UserLogReportComponent },
];
