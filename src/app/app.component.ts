import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Pokemon {
  id: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Pokedex';

  results2 = [];

  selectedPkm: {};

  onSelect(pokemon: Pokemon): void {
    this.http.get(pokemon.url).subscribe(data => {
      this.selectedPkm = data;
      
    });
  }
	
  constructor(private http: HttpClient){}

  results = [];

  ngOnInit(): void {
    this.http.get('http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0').subscribe(data => {
      this.results = data['results'];
      
    });
    
  }
}
