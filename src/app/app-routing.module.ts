import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Import */
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';

// Debug
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AfterComponent } from './professor/after/after.component';
import { StartComponent } from './professor/start/start.component';

const routes: Routes = [
  // Set root to login page
  { path: 'professor', component: ProfessorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'student', component: StudentComponent },
  // Debug Route
  { path: 'prof-start', component: StartComponent },
  { path: 'prof-after', component: AfterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navigation', component: NavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
