import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from './service/auth.service';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    //   styleUrls: ['./signin.component.css']
})
export class SignupComponent {
    email: string;
    password: string;
    constructor(private authService: AuthService, private router: Router) { }
    onSubmit(loginForm: NgForm) {
        if (loginForm.valid) {
            //Sending authentication request to firebase...
            this.authService.signUp({ email: this.email, password: this.password });
            // this.router.navigate(['/protected']);
        }
    }
}
