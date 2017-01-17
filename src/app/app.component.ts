/*
 * Angular 2 decorators and services
 */

import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'wt-app',
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('./app.component.css')
    ],
    template: require('./app.component.html')
})
export class AppComponent {
}
