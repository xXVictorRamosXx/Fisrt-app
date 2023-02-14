import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    MenubarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
