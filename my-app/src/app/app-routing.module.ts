import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path: '', component:ContentComponent},
  //{path: 'date', component:DateComponent},
  {path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
