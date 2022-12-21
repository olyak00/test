import {Component, ViewChild} from "@angular/core";
import { NgModel, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
   selector:  'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.css']
})
export class FormComponent{
  

Ukrainian = false;
English = false;
French = false;
German = false;

name: string = "";
date_of_birth: string = "";
phone: string = "";
 
onSubmit(form: NgForm){
    console.log(form);

}



}


   
