/* Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Import Angular Module (In imports)
import { AppRoutingModule } from './app-routing.module';

/* Component */
import { AppComponent } from './app.component';

@NgModule({
  // Component Injection
  declarations: [
    AppComponent
    // Custom
  ],
  // Module Injection
  imports: [
    BrowserModule,
    // Custom
    AppRoutingModule,
  ],
  // Service Injection
  providers: [],
  // Root Component
  bootstrap: [AppComponent]
})
export class AppModule { }
