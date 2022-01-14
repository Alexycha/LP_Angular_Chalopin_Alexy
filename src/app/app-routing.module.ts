import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorModifComponent } from './actor-modif/actor-modif.component';
import { ActorNewComponent } from './actor-new/actor-new.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'list',
    component: ActorListComponent
  }, {
    path: 'new',
    component: ActorNewComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'modif/:id',
    component: ActorModifComponent
  }, {
    path: 'details/:id',
    component: ActorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
