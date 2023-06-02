import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUsersListResponse } from '../types/users.types';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})

export class UsersService {

  public perPage = 6;
  //we passe the service to the construct we dont explicite calles to services
  constructor(private http: HttpClient) { }
  
  getUser(page:number):Observable<HttpUsersListResponse>{
    return (this.http.get(`${environment.apiLink}?page=${page}&per_page=${this.perPage}`)) as Observable<HttpUsersListResponse>;
  }
}
