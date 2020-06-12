import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count = 0;
  countReset(){
    this.count = 0; 
  }
  countIncrease(){
    this.count = this.count + 1; 
    if(this.count > 10){
      this.count = 10;
    }
  }
  countDecrease(){
    this.count = this.count - 1; 
    if(this.count < 0){
      this.count = 0;
    }
  }
}
