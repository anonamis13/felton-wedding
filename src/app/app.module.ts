import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { RegistryComponent } from './registry/registry.component';
import { TravelComponent } from './travel/travel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistryComponent,
    TravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
