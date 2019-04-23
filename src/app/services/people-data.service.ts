import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Owner } from 'src/app/models/owner/owner.model';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeopleDataService {

  RESOURCE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Owner[]> {
    return this.http.get(this.RESOURCE_URL) as Observable<Owner[]>;
  }

}
