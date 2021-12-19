import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'counter', loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule) },
    { path: 'fetch-data', loadChildren: () => import('./modules/fetch-data/fetch-data.module').then(m => m.FetchDataModule) }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}