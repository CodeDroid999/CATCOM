import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { EventsComponent } from './components/events/events.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutComponent},
  {path: "events", component: EventsComponent},  
  {path: "alumni", component: AlumniComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'admin', loadChildren: ()=>import("./modules/admin/admin.module").then((m)=>AdminModule)},
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
