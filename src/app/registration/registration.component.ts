import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  countries: string[] = ['USA', 'UK', 'Canada','India'];
  departments: string[] = ['PSO', 'Engineering','HR'];
  skills: string[] = ['Java', 'Angular'];
  roles: string[] = ['1', '2','3'];
  default = '3';


  form: FormGroup;


  constructor(private restangular: Restangular, private router: Router ) { }

  ngOnInit() {

    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required,
        Validators.minLength(5)]),
      userName: new FormControl('', [Validators.required,
      Validators.minLength(8)]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,
      Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      country: new FormControl(''),
      department: new FormControl(''),
      roleId: new FormControl(''),
      skillCategory: new FormControl('')

    });
    this.form.controls['roleId'].setValue(this.default, {onlySelf: true});
    this.form.controls['country'].setValue('UK', { onlySelf: true });
    this.form.controls['department'].setValue('PSO', { onlySelf: true });
    this.form.controls['skillCategory'].setValue('Java', { onlySelf: true });
  }

  onSubmit() {

    if (this.form.valid) {
      console.log(this.form.value);
      const baseurl = this.restangular.all('/users/save');
      baseurl.post(this.form.value).subscribe((response: any) => {
        console.log(response);
        window.location.reload();
      });

    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }

}
