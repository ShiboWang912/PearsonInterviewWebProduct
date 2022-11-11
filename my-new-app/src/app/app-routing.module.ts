import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentsListComponent } from './components/incidents-list/incidents-list.component';
import { AddIncidentComponent } from './components/add-incident/add-incident.component';
import { IncidentDetailComponent } from './components/incident-detail/incident-detail.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {title: 'home'}},
  { path: 'incidents-list', component: IncidentsListComponent, data: {title: 'incident-list'} },
  { path: 'add-incident', component: AddIncidentComponent, data: {title: 'add-incident'} },
  { path: 'edit-incident/:id', component: IncidentDetailComponent, data: {title: 'edit-incident'} },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
