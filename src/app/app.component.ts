import { Component } from '@angular/core';
import { PokemonServices } from './Servicios/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private pokemonSvc:PokemonServices){}
  
}
