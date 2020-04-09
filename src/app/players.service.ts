import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Player } from './player'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersUrl = 'http://api.football-data.org/v2/teams'

  httpOptions = {
    headers: new HttpHeaders({ 'X-Auth-Token': '57f6eef03062432fa252243ea67a616d' })
  };

  constructor(private http: HttpClient) { }


  getPlayers() {
    console.log('Get players has been called');
    return this.http.get(this.playersUrl, this.httpOptions)

  }
}
