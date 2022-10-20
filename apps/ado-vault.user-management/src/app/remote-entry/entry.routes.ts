import { Route } from '@angular/router';
import { UserManagementComponent } from '../components/user-management.component';

export const remoteRoutes: Route[] = [
  { path: '', component: UserManagementComponent },
];
