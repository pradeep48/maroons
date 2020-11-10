import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResistrationComponent } from './resistration/resistration.component';

const routes: Routes = [
    {path : '', component : ResistrationComponent },
    {path : 'resistration', component : ResistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
