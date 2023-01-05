import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css']
})
export class GamesCardComponent implements OnInit {

	@Input()
	gameCard:string = ""

	@Input()
	gameTitle:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
