import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

const routes: Routes = [

{path: '',redirectTo: 'home',pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{ path: 'about', component: QuienSoyComponent },
{ path: 'login', component: LoginComponent },
{ path: 'juegos', component: JuegosComponent },


//{path: 'login/about',redirectTo: 'about',pathMatch: 'full'},








];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
