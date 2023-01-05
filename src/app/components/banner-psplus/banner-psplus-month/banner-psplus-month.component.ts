import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-psplus-month',
  templateUrl: './banner-psplus-month.component.html',
  styleUrls: ['./banner-psplus-month.component.css']
})
export class BannerPsplusMonthComponent implements OnInit {
	@Input()
	gameMonthSuperior:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
