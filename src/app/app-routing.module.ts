import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Import */
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  // Set root to login page
  { path: 'login', component: LoginComponent },
  { path: '', component: ProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
