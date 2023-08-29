import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { TerminosYCondicionesComponent } from './pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    TerminosYCondicionesComponent,
    HomeComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
