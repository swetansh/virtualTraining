import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AccountComponent } from './account/account.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateCourseComponentComponent } from './create-course-component/create-course-component.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResultComponent } from './result/result.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'index', component: DashboardComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'account', component: AccountComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'createCourse', component: CreateCourseComponentComponent },
    { path: 'exams', component: ExaminationComponent },
    { path: 'result', component: ResultComponent },
    { path: 'assign-training', component : CoursesListComponent},
    { path: 'developerlist' , component: DevelopersListComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'index' }
];

export const routing = RouterModule.forRoot(appRoutes);
