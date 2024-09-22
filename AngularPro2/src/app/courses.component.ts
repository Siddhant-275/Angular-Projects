import {Component} from '@angular/core'; // core library for angular applications
import { CoursesService } from './courses.service';


//to convert a class to component we use decorators
//decorator is a function which accepts an object parameter.
//below is the code for decorators

@Component({
    selector:'courses',
    // template: `
    //             <h2>{{getTitle()}}</h2>
    //                 <ul>
    //                     <li *ngFor="let course of courses">
    //                         {{course}}
    //                     </li>
    //                 </ul>`

    template : `<div>
                    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive?'blue':'white'"
                    (click)="OnSave($event)">Save</button>
                </div>
                <div>
                    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
                </div>

    `

    //double curly braces are used to render something to the browser
    //using double curly braces we bind a field to the view and  it is dynamically rendered
    //eg. template :<h2>{{title}}</h2>
    // we can write a simple javascript code also inside the curly braces
    //eg. template :'<h2>{{"Title: "+title}}</h2>
    //we can also call a method there
    //eg. template:<h2>{{getTitle()}}</h2>
    //*ngfor is directive

    // <input #email (keyup.enter)="onKeyUp(email.value)" />
    //#email is a template variable to store the value entered in the input field.
    //instead of passing the event around we can pass the variable


    //<button class="btn btn-primary" [class.active]="isActive"> ---- this is known as class binding we bind an attribute of class


    // <input [value]="email" (keyup.enter)="onKeyUp()" />
    //with property binding we can bind the value from component to view but if we type anything in the view we
    //caanot retrieve it in the component



    //2 way binding one way to implement
    // <input [value]="email" (keyup.enter)="email = $event.target.value;onKeyUp()" />

    //angular has a built in directive ngModel to implement 2-way binding
})

export class CoursesComponent
{
    title = "List of courses";
    courses ;
    isActive = true;
    email = "xyz@xyz.com";

  //  constructor()
    //{
     //   let service = new CoursesService();//by using new operator we have tightly coupled the component with the service
        //this.courses = service.getCourses();
  //  }
  constructor(service : CoursesService)
  {
    this.courses = service.getCourses();
      // this implementation we add a dependency to the constructor and the dependency is of type CoursesService
      //first it creates the instance of CoursesService and passes it to the constructor
      
  }

    getTitle()
    {
        return this.title;
    }
OnSave($event)
{
    alert("button is clicked");
    console.log($event);
}
onKeyUp(){
    console.log("enter was pressed");
    alert(this.email);
}
    
    
}