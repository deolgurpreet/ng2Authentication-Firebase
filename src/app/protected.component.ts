import { Component } from '@angular/core';

@Component({
    selector: 'protected',
    templateUrl: `
    PROTECTED ROUTE WILL NEVER SHOW IF USER IS NOT LOGGED IN
    `,
    //   styleUrls: ['./signin.component.css']
})
export class ProtectedComponent {
    //   title = 'app works!';
}
