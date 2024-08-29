import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // CommonModule //este modulo provee de las directivas estructurales ngFor, ngIf...Aunque BrowserMdule ya trabaja con el por defecto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
