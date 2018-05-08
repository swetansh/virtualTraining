import { Component } from '@angular/core';

import { DataService } from '../app/data.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  msgsGrowl:Message[]=[];

constructor(private service: DataService){

  this.service.message.subscribe(

    (val) => {
      this.msgsGrowl=[];
      if(val)
      this.msgsGrowl.push(val);
      
    }

  );

}


  
}
