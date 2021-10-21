import { Component } from '@angular/core';

@Component({
  selector: 'my-favorite',
  templateUrl: './my-favorite.component.html',  //Aqui está o exercício do professor.
  styleUrls: ['./my-favorite.component.css'],
  // template: `
  //     <span [class]="isFavorite ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)="onChange()"></span>
  // `
})

export class MyFavoriteComponent {

  isFavorite = true;
  
  onChange(){
    this.isFavorite = !this.isFavorite;
  }
}
