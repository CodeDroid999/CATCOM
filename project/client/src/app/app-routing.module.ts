import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutComponent},
  {path: "blog", component: BlogComponent},
  {path: "events", component: EventsComponent},  
  {path: "alumni", component: AlumniComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'admin',
  canActivate: [AuthGuard],
   loadChildren: ()=>import("./modules/admin/admin.module").then((m)=>AdminModule)},
  { path: "", component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'sign-in', component: LogInComponent},
  { path: "**", component: NotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
