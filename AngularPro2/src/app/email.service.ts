import { Injectable } from '@angular/core';
//injectable is a decorator function
//it is needed only when the service is having dependencies in its constructor

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
