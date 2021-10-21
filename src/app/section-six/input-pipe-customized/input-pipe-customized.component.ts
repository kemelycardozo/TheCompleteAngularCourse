import { Component } from '@angular/core';

@Component({
  selector: 'input-pipe-customized',
  // templateUrl: './input-pipe-customized.component.html', //Resposta do professor
  styleUrls: ['./input-pipe-customized.component.css'],
  template:`<input type="text" [(ngModel)]="title" />  <br> {{title | titleCase}}`
})

export class InputPipeCustomizedComponent {
  title:string;
}
