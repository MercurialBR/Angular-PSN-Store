import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-description',
  templateUrl: './banner-description.component.html',
  styleUrls: ['./banner-description.component.css']
})
export class BannerDescriptionComponent implements OnInit {
	@Input()
	monthDescription:string = " "


  constructor() { }

  ngOnInit(): void {
  }

}
