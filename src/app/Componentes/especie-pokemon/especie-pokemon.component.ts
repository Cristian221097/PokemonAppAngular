import { Component, OnInit } from '@angular/core';
import { PokemonServices } from 'src/app/Servicios/pokemon-service.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-especie-pokemon',
  templateUrl: './especie-pokemon.component.html',
  styleUrls: ['./especie-pokemon.component.css']
})
export class EspeciePokemonComponent implements OnInit {

  PokemonData:any;
  nombre:string;

  constructor(private pokemonSvc:PokemonServices) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonSvc.getPokemon().subscribe(response =>{
      console.log(response);
      this.PokemonData = response;
    });
  }

  getByName(){
    this.pokemonSvc.getPokemonByName(this.nombre).subscribe(response=>{
      this.PokemonData=response;
      console.log(response);
    },
    error=>{
      alert("introduzca un nombre de especie correcto");
    }
    );
  }

  download(){
    const blob = new Blob([`
                            Specie Pokemon
    name: ${this.PokemonData.name}
    evolves from species: ${this.PokemonData.evolves_from_species.name}
    shape: ${this.PokemonData.shape.name}
    generation: ${this.PokemonData.generation.name}
    growth rate: ${this.PokemonData.growth_rate.name}
    color: ${this.PokemonData.color.name}
    text:${this.PokemonData.flavor_text_entries[0].flavor_text}
    
    `],{type:'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob,'text.txt');
  }

}
