import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-psplus',
  templateUrl: './banner-psplus.component.html',
  styleUrls: ['./banner-psplus.component.css']
})
export class BannerPsplusComponent implements OnInit {

	@Input()
	gameMonthSuperior:string = " "

	@Input()
	monthDescription:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
