import { User } from './user';
import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio-and-checkbox';
  user = new User();
  constructor(){

  }
  OnFormSubmit(form:NgForm){
    if(form.invalid){
      return
    }
    console.log("User Name:" +form.controls['uname'].value);
    console.log("Gender:" +form.controls['gender'].value);
    console.log("Married ?:" +form.controls['married'].value);
    console.log("Accepted:" +form.controls['accepted'].value);
  }

  resetForm(form:NgForm){
    this.user= new User()
    form.resetForm({
      married:false
    })
  }

  setDefaultValue(){
    this.user.username="pranav"
    this.user.gender="male"
    this.user.isMarried=false
    this.user.isAccepted=true
  }
}
