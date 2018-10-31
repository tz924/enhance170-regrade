/* Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Import Angular Module (In imports)
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

/* Component */
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  /* Component Injection */
  declarations: [
    AppComponent,
    // Custom
    ProfessorComponent,
    LoginComponent,
    StudentComponent,
    NavigationComponent
  ],
  /* Module Injection */
  imports: [
    BrowserModule,
    // Custom
    AppRoutingModule,
    NgbModule.forRoot(),    // ng-bootstrap
    FormsModule   // Forms data binding
  ],
  /* Service Injection */
  providers: [],
  /* Root Component */
  bootstrap: [AppComponent]
})
export class AppModule { }
