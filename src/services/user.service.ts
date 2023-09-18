import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<any[]> {
    let url = 'https://run.mocky.io/v3/7b1055b6-b074-45b6-b965-680eefd2427a';
    return this.httpClient.get<any[]>(url);
  }
}
