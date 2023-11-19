import { Footballers } from '../model/footballers';

export class ApiRepo {
  apiUrl = 'http://localhost:2700/footballers';

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
}
