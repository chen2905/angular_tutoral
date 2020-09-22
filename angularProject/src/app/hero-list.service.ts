import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IHero } from './hero';
import { Observable, of} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class HeroListService {

  private _url: string ="/assets/data/heros1.json";

  constructor(private http: HttpClient) { }

  getHeroList():Observable<IHero[]>{
    return  this.http.get<IHero[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "server error ")
  }
}
