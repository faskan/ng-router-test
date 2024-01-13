import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';

export const routes: Routes = [
    {
        path: 'dynamic',
        component: DynamicComponent
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];
