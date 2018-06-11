import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from '../../body/home/home.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';


const routes: Routes = [
  { path: 'heroes', component: HomeComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },	
  { path: 'about', component: FooterComponent },
  { path: '**', redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
