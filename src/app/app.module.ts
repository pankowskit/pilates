import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { ClassesModule } from './classes/classes.module';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PricesModule } from './prices/prices.module';
import { PrivacyModule } from './privacy/privacy.module';
import { TrainersModule } from './trainers/trainers.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    AppRoutingModule,
    ClassesModule,
    ComingsoonModule,
    ContactModule,
    HomeModule,
    PricesModule,
    PrivacyModule,
    TrainersModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
