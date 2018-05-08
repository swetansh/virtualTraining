import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable()
export class UploadService{

  constructor(private http: HttpClient) {

  }

  uploadFile(url: string, file: File): Observable<HttpEvent<any>> {

    let formData = new FormData();
    formData.append('file', file);

    // let params = new HttpParams();

    // const options = {
    //   params: params,
    //   reportProgress: true,
    // };

    const req = new HttpRequest('POST', 'http://192.168.170.164:8080/fileupload/post', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}