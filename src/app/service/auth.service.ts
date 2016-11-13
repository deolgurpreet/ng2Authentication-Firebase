import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var firebase;
@Injectable()
export class AuthService {
    constructor(private router: Router) { }
    signIn(credentials) {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .catch(function (error) {
                console.log(error);
            });
    }
    signUp(credentials) {
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).catch(function (error) {
            console.log(error);
        });
    }

    isAuthenticated(): any {
        if (!firebase.auth().currentUser)
            return false;
        return true;
    }
    logout() {
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
    }
}