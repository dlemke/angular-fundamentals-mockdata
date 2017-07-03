import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const userRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);