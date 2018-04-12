import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  
import { homeRoutes }    from './home/home.router';
import { experiencesRoutes }    from './experiences/experiences.router';
import { skillsRoutes }    from './skills/skills.router';
import { familyRoutes }    from './family/family.router';
import { contactRoutes }    from './contact/contact.router';

export const routes: Routes = [  
    {  
        path: '',  
        redirectTo: '/home',
        pathMatch: 'full'
    },  
   ...homeRoutes,  
   ...experiencesRoutes,
   ...skillsRoutes,
   ...familyRoutes,
   ...contactRoutes,
];  
  
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);