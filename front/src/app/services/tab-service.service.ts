import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tab} from '../tab/tab';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {

  constructor(private http: HttpClient) {
  }

  getTabs(): Observable<Tab[]> {
    return this.http.get<Tab[]>('http://localhost:8080/MyApp/subsystems/');
  }

  saveCommand(tab: Tab): Observable<Tab>{
      return this.http.post<Tab>('http://localhost:8080/MyApp/subsystems/', tab);
  }
}
