import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Pokemon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Pokedex';

  selectedPkm: Pokemon;

  onSelect(pokemon: Pokemon): void {
    this.selectedPkm = pokemon;
  }

  results = [];
	
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0').subscribe(data => {
      this.results = data['results'];
    });
  }
}
