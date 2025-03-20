import { Routes } from '@angular/router';
import { DatatableComponent } from './feature/datatable.component';
import { AnotherFeatureComponent } from './anotherfeature/anotherfeature.component';

export const routes: Routes = [
    {path:'/datatable',component:DatatableComponent},
    {path:'/anotherfeature',component:AnotherFeatureComponent}
];
