import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  protected user: Users | undefined;

  constructor(private httpClient: HttpClient) {}

  addUser(newUsers: Users): Observable<Users> {
    const apiUrl = 'https://fakestoreapi.com/users';
    return this.httpClient.post<Users>(apiUrl, newUsers);
  }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('https://fakestoreapi.com/users');
  }

  setUserLogin(user: Users): void {
    this.user = user;
  }
  getUserLogin(): Users | undefined {
    return this.user;
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Users } from './components/users/users.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class ServicesService {
//   protected user: Users | undefined;

//   constructor(private httpClient: HttpClient) {}

//   addUser(newUsers: Users): Observable<Users> {
//     const apiUrl = 'https://api.escuelajs.co/api/v1/users';
//     return this.httpClient.post<Users>(apiUrl, newUsers);
//   }

//   getUsers(): Observable<Users[]> {
//     return this.httpClient.get<Users[]>('https://api.escuelajs.co/api/v1/users');
//   }

//   setUserLogin(user: Users): void {
//     this.user = user;
//   }
//   getUserLogin(): Users | undefined {
//     return this.user;
//   }
// }
