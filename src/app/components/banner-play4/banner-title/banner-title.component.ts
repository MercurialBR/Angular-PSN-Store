import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.css']
})
export class BannerTitleComponent implements OnInit {
	@Input()
	exploreTitle:string = " "
	@Input()
	exploreDescription:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
