import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Base layout for the app
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to /home
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'merch',
                loadComponent: () => import('./merch/merch.component').then(m => m.MerchComponent)
            },  {
                path: 'calendar',
                loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
            },
        ]
    }
];

export const appRouterProviders = provideRouter(routes);
