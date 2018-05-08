import { Component, OnInit, Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { RestangularConfigFactory } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    header:  HttpHeaders;
    abc: Observable<any>;
    data: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private restangular: Restangular) { }

    ngOnInit() {
        // reset login status
        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.data = {
            'password': this.model.password,
            'email': this.model.username
        };
        const baseAccounts = this.restangular.all('users/authenticateUser');
        baseAccounts.post(this.data).subscribe((response: any) => {
                localStorage.setItem('isLoggedIn',"true");
                localStorage.setItem('roleId',response.roleId);
                localStorage.setItem('userId',response.userId);
                window.location.reload();
              });
        // this.header = new HttpHeaders();
        // this.restangular.one('authentication').one('authenticateUser')
        // .get({'': ''}, {'Authorization': 'Basic ' + btoa(this.model.username + ':' + this.model.password)})
        // .subscribe((response: any) => {
        //     console.log(response);
        //   });
        }

    register() {
        this.router.navigateByUrl('/register');
    }

}
