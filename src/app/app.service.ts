import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getQr(Example:any) {
    return this.http.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Example}`,{
      responseType:'blob'
    });
  }
}
