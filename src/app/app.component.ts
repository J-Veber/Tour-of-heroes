import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Superman" },
  { id: 15, name: "Batman" },
  { id: 16, name: "Robin" },
  { id: 17, name: "ICQ" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>
      {{title}}
    </h1>
    <h2>
      My Heroes
    </h2>
    <ul class="heroes">
      <li *ngFor="let hero for heroes">
        
        <!--<label>{{this.heroes[1].name}}</label>-->
        <!--something should be here-->
      </li>
    </ul>
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
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'azaza'
  };
  heroes = HEROES;
  // constructor() {
  //   setInterval( () => {
  //     this.test = Math.floor(Math.random() * 100);
  //   }, 1000)
  // }
  // onLabelClick() {
  //   this.hero.name = 'clicked';
  // }
}
