import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NotFoundComponent } from './sharepage/not-found/not-found.component';
import { ForgotPasswordComponent } from './sharepage/forgot-password/forgot-password.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'sign-in', component: LogInComponent },
  {path:'password-reset',component: ForgotPasswordComponent},
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
