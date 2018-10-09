import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"; // importo la clase Hero del archivo hero.ts que está en la raiz /app
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes', // componente del CSS selector (es el elemento que identifica la vista en el HTML)
  templateUrl: './heroes.component.html', // donde está el componente
  styleUrls: ['./heroes.component.css'] // Donde esta las hojas de cascada de estilos
})
export class HeroesComponent implements OnInit {
  // agrego variable la puedo llamar en el html del componente
  selectedHero: Hero;
  // crea la estancia de la clase Hero para el FOR
  heroes = HEROES;
  // constructor
  constructor() { }
  // ayudante de inicio
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
