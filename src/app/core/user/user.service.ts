import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  // BehaviorSubject emite e armazena a informação até que alguém se inscreva (subscribe) e pegue a última informação.
  // Subject emite a informação e não armazena.
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
      this.tokenService.setToken(token);
      this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
      const token = this.tokenService.getToken();
      const user = jwt_decode(token) as User;
      this.userSubject.next(user);
  }
}
