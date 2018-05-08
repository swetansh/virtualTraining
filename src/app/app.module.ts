import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';
// import { TokenInterceptor } from './utils/token.interceptor';
import { routing } from './app.routing';
import { LoginComponent } from './login/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AccountComponent } from './account/account.component';
import {RegistrationComponent} from './registration/registration.component';
import { CreateCourseComponentComponent } from './create-course-component/create-course-component.component';
import { UploadService } from './upload.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ExaminationComponent} from './examination/examination.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ResultComponent } from './result/result.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import {DataTableModule} from 'primeng/datatable'
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';

import {GrowlModule,Message} from 'primeng/primeng';
import { DataService } from './data.service';


// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://192.168.170.164:8080');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Basic UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    AccountComponent,
    RegistrationComponent,
    CreateCourseComponentComponent,
    HeaderComponent,
    FooterComponent,
    ExaminationComponent,
    ResultComponent,
    CoursesListComponent,
    DevelopersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    RadioButtonModule,
    DataTableModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    GrowlModule,
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [
    DataService,
    // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptor,
  //   multi: true
  // },
  UploadService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
