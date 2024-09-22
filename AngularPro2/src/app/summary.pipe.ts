import {Pipe, PipeTransform } from '@angular/core';

//Pipe is a decorator function
//PipeTransform is an interface that defines the shape of all pipes in angular

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform
{
    transform(value:string, limit? : number)
    {
        if(!value)
        {
            return null;
        }

        let actualLimit = (limit)?limit:50;
       return  value.substring(0,50)+'....';
    }
}