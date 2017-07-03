import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>
      {{title}}
    </h1>
    <h2>
      {{hero.name}} details!
    </h2>
    <!--<div><label (click)="onLabelClick()" >id: </label>{{hero.id}}</div>-->
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
    <!--<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>-->
    `
})

export class AppComponent {
  title = 'app';
  test = 231;
  hero: Hero = {
    id: 1,
    name: 'azaza'
  };
  // constructor() {
  //   setInterval( () => {
  //     this.test = Math.floor(Math.random() * 100);
  //   }, 1000)
  // }
  // onLabelClick() {
  //   this.hero.name = 'clicked';
  // }
}
