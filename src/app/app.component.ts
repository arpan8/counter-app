import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
      Swal.fire({
        title: 'Not possible',
        text: 'count can not increase now',
        icon: 'warning'
      });
    }
  }
  countDecrease(){
    this.count = this.count - 1; 
    if(this.count < 0){
      this.count = 0;
      Swal.fire({
        title: 'Not possible',
        text: 'count can not decrease now',
        icon: 'warning'
      });
    }
  }
}
