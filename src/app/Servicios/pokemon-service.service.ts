import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServices{

  url:string = "https://localhost:44348/api/Poke";

  constructor(private _htpp:HttpClient) { }

  getPokemon():Observable<any>{
    return this._htpp.get(this.url);
  }

  getPokemonByName(name:string):Observable<any>{
    return this._htpp.get(this.url+"/"+name);
  }

}
