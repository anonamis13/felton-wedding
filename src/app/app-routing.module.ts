import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { TravelComponent } from './travel/travel.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent

    },
    /*
    {
        path: 'registry',
        component: RegistryComponent
    },
    {
        path: 'travel',
        component: TravelComponent
    }
    */
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {

                // enableTracing: false



            }

        )

    ],

    exports: [

        RouterModule

    ],

    providers: [

    ]

})

export class AppRoutingModule {

}
