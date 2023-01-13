import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-play5',
  templateUrl: './banner-play5.component.html',
  styleUrls: ['./banner-play5.component.css']
})
export class BannerPlay5Component implements OnInit {

	@Input()
	itemName:string = " "

	@Input()
	itemDescription:string = " "

	@Input()
	itemImage = " "


	@Input()
	exploreTitle:string = " "

	@Input()
	exploreDescription:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
