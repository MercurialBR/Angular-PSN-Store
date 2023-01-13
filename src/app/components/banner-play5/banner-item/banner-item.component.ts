import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.css']
})
export class BannerItemComponent implements OnInit {

	@Input()
	itemImage:string = " "

	@Input()
	itemName:string = " "

	@Input()
	itemDescription:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
