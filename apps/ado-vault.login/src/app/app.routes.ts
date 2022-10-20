import { MsalLoginComponent } from './components/msal-login.component';
import { Route } from '@angular/router';
import { AuthGuards } from '@ado-bcp-ui/auth-guards';

export const appRoutes: Route[] = [
  {
    path: 'ado-vault.dashboard',
    loadChildren: () =>
      import('ado-vault.dashboard/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.notification',
    loadChildren: () =>
      import('ado-vault.notification/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.storage',
    loadChildren: () =>
      import('ado-vault.storage/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.role',
    loadChildren: () =>
      import('ado-vault.role/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.restore',
    loadChildren: () =>
      import('ado-vault.restore/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.report',
    loadChildren: () =>
      import('ado-vault.report/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.report/backupReport',
    loadChildren: () =>
      import('ado-vault.report/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.report/restoreReport',
    loadChildren: () =>
      import('ado-vault.report/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.report/userLogReport',
    loadChildren: () =>
      import('ado-vault.report/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },

  {
    path: 'ado-vault.user-management',
    loadChildren: () =>
      import('ado-vault.user-management/Module').then(
        (m) => m.RemoteEntryModule
      ),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.integration',
    loadChildren: () =>
      import('ado-vault.integration/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.entity',
    loadChildren: () =>
      import('ado-vault.entity/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: 'ado-vault.company',
    loadChildren: () =>
      import('ado-vault.company/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
  {
    path: '',
    component: MsalLoginComponent,
  },
  {
    path: 'ado-vault.login',
    component: MsalLoginComponent,
  },
  {
    path: 'ado-vault.backup',
    loadChildren: () =>
      import('ado-vault.backup/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuards],
  },
];
