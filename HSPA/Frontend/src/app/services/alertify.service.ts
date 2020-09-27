import { Injectable } from '@angular/core';
import * as alertify  from  'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string){
    alertify.success(message)
  }
  fail(message: string){
    alertify.warn(message)
  }
}
