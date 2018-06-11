import {RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';


const appRoutes: Routes = [

];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);