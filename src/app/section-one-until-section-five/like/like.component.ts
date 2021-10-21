import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isActive: boolean; 
  @Input() likesCount: number;

  onClick(){
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
  }
}
