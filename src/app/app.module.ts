import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerPlay4Component } from './components/banner-play4/banner-play4.component';
import { BannerTitleComponent } from './components/banner-play4/banner-title/banner-title.component';
import { BannerItemComponent } from './components/banner-play4/banner-item/banner-item.component';
import { BannerPsplusComponent } from './components/banner-psplus/banner-psplus.component';
import { BannerPsplusMonthComponent } from './components/banner-psplus/banner-psplus-month/banner-psplus-month.component';
import { BannerDescriptionComponent } from './components/banner-psplus/banner-description/banner-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPriceComponent,
    FooterComponent,
    BannerPlay4Component,
    BannerTitleComponent,
    BannerItemComponent,
    BannerPsplusComponent,
    BannerPsplusMonthComponent,
    BannerDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
