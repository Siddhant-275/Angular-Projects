import {Component} from '@angular/core';

@Component({
    selector:'pipesTrial',
    template:`
        {{pipesTrial.title | uppercase}} <br/>
        {{pipesTrial.students | number}}<br/>
        {{pipesTrial.rating | number:'1.2-2'}} <br/>
       
        {{pipesTrial.price | currency:'INR':true:'2.2-2'}}<br/>
        {{pipesTrial.releaseDate |date:'longDate'}}<br/>
    {{pipesTrial | json}}<br/>
    {{text | summary : 10}}
    <p>{{str}}[0:4]: '{{str | slice:0:4}}' - output is expected to be 'abcd'</p>
    `
})

export class PipesTrialComponent{
    pipesTrial ={
        title : "The Complete Angular Course",
        rating:4.9745,
        students :30123,
        price:190.95,
        releaseDate:new Date(2016,3,1)

    }
    text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    str = "akhil kumar";
}