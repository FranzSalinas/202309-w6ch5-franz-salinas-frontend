import { serverUrl } from '../config';
import { Footballers } from '../model/footballers';
import { LoginResponse } from '../model/login.response';
import { LoginUser, User } from '../model/user';

export class ApiRepo {
  apiUrl = serverUrl + '/footballers';
  apiUrlUser = serverUrl + '/users';

  async getFootballers(): Promise<Footballers[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async setFootballers(
    id: Footballers['id'],
    updatedFootballers: Partial<Footballers>
  ): Promise<Footballers> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedFootballers),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getUsers(): Promise<User[]> {
    const response = await fetch(this.apiUrlUser);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async registerUser(newUser: Partial<User>): Promise<User> {
    const finalUrl = this.apiUrlUser + '/register';
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginUser(loginUser: LoginUser): Promise<LoginResponse> {
    const finalUrl = this.apiUrlUser + '/login';
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginWithToken(token: string): Promise<LoginResponse> {
    const finalUrl = this.apiUrlUser + '/login';
    const response = await fetch(finalUrl, {
      method: 'PATCH',

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
