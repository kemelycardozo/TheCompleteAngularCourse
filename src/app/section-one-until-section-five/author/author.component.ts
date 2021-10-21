import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  listAuthors: string[];

  constructor(service: AuthorService) {
    this.listAuthors = service.getAuthors();
   }
}
