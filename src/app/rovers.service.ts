import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoversService {
  private url = `https://mars-photos.herokuapp.com/api/v1/rovers/`

  constructor(private http: HttpClient) { }

  getOpportunity() {
    return this.http.get(`${this.url}/opportunity`)
  }
  getOpportunityPhotos(solNum: number){
    return this.http.get(`${this.url}/opportunity/photos?sol=${solNum}`)
  }

  getSpirit(){
    return this.http.get(`${this.url}/spirit`)
  }
  getSpiritPhotos(solNum: number){
    return this.http.get(`${this.url}/spirit/photos?sol=${solNum}`)
  }

  getCuriosity(){
    return this.http.get(`${this.url}/curiosity`)
  }
  getCuriosityPhotos(solNum: number){
    return this.http.get(`${this.url}/curiosity/photos?sol=${solNum}`)
  }


}
