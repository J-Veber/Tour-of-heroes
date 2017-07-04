import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {HEROES} from "./mock-heroes";

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
    `,
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  heroes: Hero[];
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
  getHeroes(): void {
    this.heroService.getHeroes().then( (heroes: Hero[]) => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
