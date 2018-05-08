import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators/window';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  startDate:Date=null;
  endDate:Date=null;
  startMinDate:Date=new Date();
  showDeveloper:boolean=false;
  selectedCourse: any=null;
  courses: any[] = [];
  developers: any[] = [];

  answer:any={};

  selectedDevelopers: any[]=[];

  constructor(private restangular: Restangular,private service:DataService,private router:Router) {

this.getCourses();

   }

  ngOnInit() {
  }


  showEmployees() {

    this.restangular.one('manageTrainings').one('getUsersForSelectedExam',this.selectedCourse['examId']).one('A0000').get()
    .subscribe((response: any) => {
      this.developers=response;

        console.log(JSON.stringify(response));

        this.showDeveloper=!this.showDeveloper;

      });





  }

  getCourses() {


    this.restangular.one('manageTrainings').one('getAllTrainings').one('4').get()
    .subscribe((response: any) => {
      this.courses=response;
        console.log(JSON.stringify(response));

      });

  }

  assignCourses() {

    this.answer['exams']=this.selectedCourse;

this.answer['users']=this.selectedDevelopers;

this.answer['expectedCompletionDate'] =this.endDate.getFullYear() + '-' +this.endDate.getMonth() + '-' + this.endDate.getDate();

this.answer['assignedDate'] = this.startDate.getFullYear()+'-' + this.startDate.getMonth() + '-' + this.startDate.getDate();

console.log(this.answer);

    const baseurl = this.restangular.all('manageTrainings/saveSelectedTrainings');
    baseurl.post(this.answer).subscribe((response: any) => {
      console.log(JSON.stringify(response));
      this.answer = null;
      this.service.setMessage( {severity: 'success', summary: 'Success', detail: response.description} );
      setTimeout(function() {location.assign('assign-training'); }, 3000);
    },
    (error) => {
      this.service.setMessage( {severity: 'error', summary: 'Error', detail: error.message} );
    }


  );



  }

}
