import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WildcardroutingComponent } from './wildcardrouting/wildcardrouting.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { UserComponent } from './user/user.component';
import { TemplateFormPageComponent } from './template-form-page/template-form-page.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'',component:HomeComponent},
    {path:'profiles', component:ProfilesComponent},
    {path:'user/:id/:name',component:UserComponent},
    
    {path:'templatepage',component:TemplateFormPageComponent},
    {path:'productform',component:ProductFormComponent},
    {path:'productform/:data',component:ProductFormComponent},
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then((c)=>c.AdminComponent)}, // we should lazy loading on those pages, which are less useful
    {path:'**', component:WildcardroutingComponent} //double ** is used to call the wilcard entry routing
];


//wildcard routing always put on very last, otherwise every route point will call the wildcard routing