import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RealhomeComponent } from './realhome/realhome.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealhomeComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
