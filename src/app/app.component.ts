import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  results = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://pokeapi.co/api/v2/pokemon/').subscribe(data => {
      this.results = data['results'];
    });
  }
}
