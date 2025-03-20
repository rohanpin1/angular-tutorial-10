import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WildcardroutingComponent } from './wildcardrouting/wildcardrouting.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'',component:HomeComponent},
    {path:'**', component:WildcardroutingComponent} //double ** is used to call the wilcard entry routing
];


//wildcard routing always put on very last, otherwise every route point will call the wildcard routing