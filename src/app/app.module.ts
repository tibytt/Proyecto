import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RealhomeComponent } from './realhome/realhome.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LeftContentComponent } from './left-content/left-content.component';

import { FormularioComponent } from './formulario/formulario.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EnviadoComponent } from './enviado/enviado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealhomeComponent,
    FooterComponent,
    ContentComponent,
    LeftContentComponent,
   
    FormularioComponent,
    NotfoundComponent,
    NavbarComponent,
    PostsComponent,
    NosotrosComponent,
    EnviadoComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
