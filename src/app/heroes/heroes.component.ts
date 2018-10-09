import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero"; // importo la clase Hero del archivo hero.ts que está en la raiz /app

@Component({
  selector: 'app-heroes', // componente del CSS selector (es el elemento que identifica la vista en el HTML)
  templateUrl: './heroes.component.html', // donde está el componente
  styleUrls: ['./heroes.component.css'] // Donde esta las hojas de cascada de estilos
})
export class HeroesComponent implements OnInit {
  // agrego variable la puedo llamar en el html del componente
  hero_last = 'Windstorm';
  // crea la estancia de la clase Hero
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  // constructor
  constructor() { }
  // ayudante de inicio
  ngOnInit() {
  }

}
