import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Canditate } from '../models/canditate';


@Injectable()
export class CandidateInfoService {
headers: { 'Content-Type': 'application/x-www-form-urlencoded' };
webApiUrl: string = 'http://localhost/phpmyadmin/candidates';

  constructor(private http: HttpClient) { }

  getAllCandidates(){
    return this.http.get<Canditate[]>(this.webApiUrl);
  }
}
