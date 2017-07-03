import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { SessionComponent } from './pages/session/session.component';
import { ErrorComponent } from './pages/error/error.component';
import { RouteActivatorService } from './providers/route-activator.service';
import { ListResolverService } from './providers/list-resolver.service';

const appRoutes: Routes = [
    // Angular doesn't have a way to determine the correct parameter being passed in (not able to distinguish between /:id and /new).
    // Placing 'list/new' on top to get processed first.
    {
        path: 'list/new',
        component: CreateComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListComponent,
        resolve: { events: ListResolverService }
    },
    {
        path: 'list/:id',
        component: DetailsComponent,
        canActivate: [RouteActivatorService]
    },
    {
        path: 'session',
        component: SessionComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: 'users',
        loadChildren: 'app/pages/users/user.module#UserModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);