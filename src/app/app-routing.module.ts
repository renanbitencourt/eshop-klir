import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'counter', loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule) },
    { path: 'fetch-data', loadChildren: () => import('./modules/fetch-data/fetch-data.module').then(m => m.FetchDataModule) },
    { path: 'eshop', loadChildren: () => import('./modules/eshop/eshop.module').then(m => m.EshopModule) }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}