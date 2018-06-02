import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { DropDown } from './component/dropdown/dropdown.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { ConfigurationPatrolComponent } from './component/ConfigurationPatrol/configurationPatrol.component';
import { HomePageComponent } from './component/HomePage/homePage.component';
import { OrderComponent } from './component/Order/order.component';
import { NewOneComponent } from './new-one/new-one.component';
import { PopupComponent } from './component/popup/popup.component';
//import { LikeComponent } from './like/like.component';



@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LikeComponent,DropDown, ContactFormComponent, HomeComponent, NotFoundComponent, ArchiveComponent,
    ConfigurationPatrolComponent,HomePageComponent,OrderComponent, NewOneComponent, PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([

  {path :'drop', component: DropDown},
  {path :'oldHome', component: HomeComponent},
  {path :'archive/:id/:weld', component: ArchiveComponent},
  {path :'homePage', component: HomePageComponent},
  {path :'patrol', component: ConfigurationPatrolComponent},
  {path :'order', component: OrderComponent},
  {path :'notfound', component: NotFoundComponent},
  {path :'newone', component: NewOneComponent}
 

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
