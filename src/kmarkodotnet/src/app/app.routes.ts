import { ModuleWithProviders }  from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
  
import { homeRoutes }    from './home/home.router';  
// import { catRoutes }    from './cats/cat.routes';  
// import {birdRoutes} from './birds/bird.routes';  
  
// Route Configuration  
export const routes: Routes = [  
    {  
        path: '',  
        redirectTo: '/home',
        pathMatch: 'full'
    },  
   ...homeRoutes,  
//   ...dogRoutes,  
//   ...birdRoutes  
];  
  
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);