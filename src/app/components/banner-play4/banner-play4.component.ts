import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-play4',
  templateUrl: './banner-play4.component.html',
  styleUrls: ['./banner-play4.component.css']
})
export class BannerPlay4Component implements OnInit {
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
