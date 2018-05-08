import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit, AfterViewInit {
  course = '';
  questions: any ;
  answer: any = {};
  countDown = 0;
  counter = 60;
  examQuestion=true;
  resultsPage=false;
  examScore=0;
  examResult=null;
  examTime=null;


  constructor(private restangular: Restangular, private router: Router) {


  }

  ngOnInit() {
    const baseurl = this.restangular.all('exam/takeTest/1');
      baseurl.post().subscribe((response: any) => {
        this.questions = response;
      });
  }

  ngAfterViewInit() {
    this.examTime=Observable.timer(0, 1000)
      .take(this.counter)
      .map(() => --this.counter).subscribe((val) => {
        this.countDown = val;
        if (this.countDown == 0) {
          alert('Time-Out');
        }
      });
  }


  onSelect(question, option) {
    this.answer[question.question_id] = option;
  }

  checkifKeyExists(question) {
    if (this.answer[question] !== undefined) {
      return true;
    } else { return false; }
  }

  onSubmit() {
    console.log(this.answer);
    // this.answer = JSON.stringify(this.answer);
    // console.log(this.answer);
    const baseurl = this.restangular.all('exam/getResult/1/4');
      baseurl.post(this.answer).subscribe((response: any) => {
        console.log(JSON.stringify(response));
        this.examQuestion=false;
        this.resultsPage=true;
        this.examScore=response.score;
        this.examResult=response.result;
        this.examTime.unsubscribe();
      });
  }

}
