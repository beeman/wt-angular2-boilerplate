import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HelloModule } from './hello/hello.module';
import { SharedModule } from './shared.module';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ AppComponent ],
    /* Module's Components / Directives / Pipes. */
    declarations: [
        AppComponent
    ],
    /* Imports Angular's modules. */
    imports: [
        HelloModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        SharedModule
    ],
    /* Expose our Services and Providers into Angular's dependency injection. */
    providers: [
        ENV_PROVIDERS
    ]
})
export class AppModule {
}
