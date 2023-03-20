import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Used to call the backend API
import { HttpClientModule } from '@angular/common/http';

// Main Component that holds other components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// All other Components
import { MainContentComponent } from './main-content/main-content.component';

// Angular Material UI Components
import {MatToolbarModule} from '@angular/material/toolbar';
import { AssignmentComponent } from './assignment/assignment.component';
import { SearchComponent } from './search/search.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    AssignmentComponent,
    SearchComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
