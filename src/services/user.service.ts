import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Inject({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    let url = 'https://run.mocky.io/v3/7b1055b6-b074-45b6-b965-680eefd2427a';
    return this.httpClient.get<User[]>(url);
  }
}
