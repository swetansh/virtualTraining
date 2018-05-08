import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-course-component',
  templateUrl: './create-course-component.component.html',
  styleUrls: ['./create-course-component.component.css']
})
export class CreateCourseComponentComponent implements OnInit {
  form: FormGroup;
  isChecked = true;
  private selectedLink: string = "videoUpload";

  constructor(private http: HttpClient, private uploadService: UploadService, private router: Router,private service: DataService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      videoUpload: new FormControl(''),
      fileUpload: new FormControl(''),
      optRadio: new FormControl('')
    });
  }

  setradio(e: string) {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }

  selectFile(event) {
    this.uploadFile(event.target.files);
  }

  gotoHome() {
    this.router.navigateByUrl('/index');
    window.location.reload();
  }

  clearMessage(){
    this.service.setMessage( {severity:'success', summary:'Success', detail:"File Uploaded Successfully!"} );
    this.isChecked=true;
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return;
    }
    let file: File = files[0];

    this.uploadService.uploadFile("http://192.168.170.164:8080/fileupload/post", file)
      .subscribe(
        event => {
          if (event.type == HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone}% loaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely loaded!');
          }
        },
        (err) => {
          console.log("Upload Error:", err);
        }, () => {
          console.log("Upload done");
        }
      )
  }
}
