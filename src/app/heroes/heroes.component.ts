import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes', // componente del CSS selector (es el elemento que identifica la vista en el HTML)
  templateUrl: './heroes.component.html', // donde está el componente
  styleUrls: ['./heroes.component.css'] // Donde esta las hojas de cascada de estilos
})
export class HeroesComponent implements OnInit {
  // agrego variable la puedo llamar en el html del componente
  hero = 'Windstorm';
  // constructor
  constructor() { }
  // ayudante de inicio
  ngOnInit() {
  }

}
