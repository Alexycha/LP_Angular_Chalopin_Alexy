import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { ActorService } from './services/actor/actor.service';
import { HomeComponent } from './home/home.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorNewComponent } from './actor-new/actor-new.component';
import { ActorModifComponent } from './actor-modif/actor-modif.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    HomeComponent,
    ActorListComponent,
    ActorNewComponent,
    ActorModifComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
