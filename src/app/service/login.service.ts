import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = environment.baseApi + "/api/login";

  constructor() { }

   login(email: string, password: string) {
    return fetch(this.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then( res => {
        if (res.status === 200) {
          return res.data;
        }
        return null;
      } );   
}
