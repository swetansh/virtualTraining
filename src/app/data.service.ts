import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {


  constructor() { }

  message:BehaviorSubject<any> =new BehaviorSubject(null);

  setMessage(val:any){
    this.message.next(val);
  }

}
