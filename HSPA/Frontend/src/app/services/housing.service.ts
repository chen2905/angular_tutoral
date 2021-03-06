import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]>{
    return  this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        for(const id in data){
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);

          }
        }
        return propertiesArray;
      })
    )
  }
}
/*
pipe is an instance method of Observable as well as a standalone RxJS function. pipe can be used as Observable. ...
 pipe accepts operators as arguments such as filter , map , mergeScan etc with comma separated and execute them in a
 sequence they are passed in as arguments and finally returns Observable instance.Oct 30, 2018
*/
