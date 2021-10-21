import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: `
          <h1>Event Binding </h1>
          <div (click)="onDivClicked()"> 
            <button (click)="onSave($event)"> Save </button>
          </div>
          <br><br>

          ***************
          <h1>Event Filtering </h1>
          <br><br>
          <input (keyup.enter)="onKeyUp()" />

          <br><br>
          ***************

          <h1>Template Variables </h1>
          <br><br>
          <input #email (keyup.enter)="onKeyUpEmail(email.value)" />

          <br><br>
          ***************

          <h1>Two-way Binding </h1>
          <br><br>
          Binding bilateral
          <input [(ngModel)]="emailBilateral" (keyup.enter)="onKeyUpEmailBilateral()" />
  
  
          <br><br>
          ***************

          <h1>Pipes</h1>
          <br><br>
          {{course.title | uppercase |lowercase}} <br/>
          {{course.students | number}} <br/>
          {{course.rating | number:'1.2-2'}} <br/>
          {{course.price | currency:'BRL':true:'3.2-2'}} <br/>
          {{course.releaseDate | date:'shortDate'}}

          <br><br>
          ***************

          <h1>Custom Pipes</h1>
          <br><br>
          
          {{text | summary:10}}
          
  `
})
export class CoursesComponent {
  emailBilateral = 'kemely_cardozo@hotmail.com';

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2021, 5, 10)
  }

  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  onDivClicked() {
    console.log("Div was clicked.");
  }

  onSave($event){
    $event.stopPropagation(); //faz com que não mostre o console da div.

    console.log("Button was clicked.", $event);
  }

  onKeyUp(){
    console.log("ENTER was pressed");
  }

  onKeyUpEmail(email){
    console.log(email);
  }

  onKeyUpEmailBilateral(){
    console.log(this.emailBilateral);
  }
  
}
