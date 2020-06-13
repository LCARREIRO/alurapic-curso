import { environment } from './../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = environment.apiUrl;
// providedIn: 'root' = uma única instância para toda a aplicação:
@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

}
