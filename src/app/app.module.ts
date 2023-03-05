import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main Component that holds other components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// All other Components
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

// Angular Material UI Components
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
