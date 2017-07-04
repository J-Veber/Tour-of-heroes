import { Component } from '@angular/core';
import { Hero } from './hero';


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
      <li *ngFor="let hero of heroes"  
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  // constructor() {
  //   setInterval( () => {
  //     this.test = Math.floor(Math.random() * 100);
  //   }, 1000)
  // }
  // onLabelClick() {
  //   this.hero.name = 'clicked';
  // }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
