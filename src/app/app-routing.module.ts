import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports of the Components we want to route to
import { MainContentComponent } from './main-content/main-content.component';
import { SearchComponent } from './search/search.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add', component: AddAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
