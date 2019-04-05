import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'user', loadChildren: './pages/users/users.module#UsersPageModule' },
  { path: 'notif', loadChildren: './pages/notificacion/notificacion.module#NotificacionPageModule' },
  { path: 'course', loadChildren: './pages/course/course.module#CoursePageModule' },
  { path: 'areapub', loadChildren: './pages/areapub/areapub.module#AreapubPageModule' },
  { path: 'oursmo', loadChildren: './pages/oursmo/oursmo.module#OursmoPageModule' },
  { path: 'smonline', loadChildren: './pages/smonline/smonline.module#SmonlinePageModule' },
  { path: 'paym', loadChildren: './pages/paym/paym.module#PaymPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'mailer', loadChildren: './pages/mailer/mailer.module#MailerPageModule' },
  { path: 'live', loadChildren: './pages/live/live.module#LivePageModule' },
  //{ path: 'notif', loadChildren: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
