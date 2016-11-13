import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { ProtectedComponent } from './protected.component';
import { AuthGuard } from './service/auth.guard';

const APP_ROTUES: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
];

export const Routing = RouterModule.forRoot(APP_ROTUES);