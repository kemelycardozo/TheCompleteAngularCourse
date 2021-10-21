import { FavoriteChangeEventArgs } from './section-one-until-section-five/favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
      title: 'hello-world',
      isFavorite: true
  };

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log("Favorite changed", eventArgs);
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }
}
