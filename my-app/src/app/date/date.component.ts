import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  message: string = "";
  array: string[] = ["1", "2", "3"];
  responce: any;
  constructor(private http: HttpClient){
    setInterval(()=> {
      this.message = new Date().toString(),
      1000 });
  }
  ButtonClick(){
    console.log("ButtonPresed");
    this.http.get('test.php').subscribe((responce)=>{
      this.responce = responce;
      console.log(responce);
    })
  }


}
