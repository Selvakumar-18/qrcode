import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qrcode';
  imageUrl:any;
  len:any;
  constructor(private qrService:AppService) {}

  ngOnInit(){}

  makeQr(data:any){
    
    this.len = data.value
    console.log(this.len.length)
    this.qrService.getQr(data.value).subscribe((res:Blob)=>{
      
      if(res){
        this.imageUrl = URL.createObjectURL(res)
      }
      else{
        console.error('Error');
      }
      
    })
  }
}
