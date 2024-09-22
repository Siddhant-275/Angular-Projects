import {Component} from '@angular/core';
import { AuthorService } from './author.service';
@Component({
    selector : 'author',
    template :` <h2>{{getTitle()}} </h2>
                    <ul>
                    <li *ngFor = "let author of authors">
                    {{author}}
                    </li>
                    </ul>
                    `
    
})



export class AuthorComponent
{
     title = "List of Authors";
     authors;
    constructor(service : AuthorService)
    {
        this.authors = service.getAuthors();

    }
    getTitle()
    {
            return this.title;
    }


}