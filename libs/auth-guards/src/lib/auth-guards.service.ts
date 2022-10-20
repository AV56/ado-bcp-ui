import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '@ado-bcp-ui/shared-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private _activeUser = new BehaviorSubject<{ username: string } | undefined>(
    undefined
  );

  activeUser = this._activeUser.asObservable();

  constructor(private sharedService: SharedService) {
    if (localStorage.getItem('userDetails') != undefined)
      this._activeUser.next({
        username: localStorage.getItem('userDetails') as string,
      });
    else this._activeUser.next(undefined);
  }
  authDetails: any;

  login({ username }: { username: string }) {
    this.sharedService.event.subscribe((msg: any) => {
      this.authDetails = msg;
      this._activeUser.next({ username: msg });
    });
    if (this.authDetails === '' || this.authDetails == undefined) return false;
    else return true;
  }
}
