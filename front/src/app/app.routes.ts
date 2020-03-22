import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { PostsComponent } from './posts/posts.component';
import { ViewComponent } from './posts/view/view.component';
import { UpdateComponent } from './posts/update/update.component';
import { CreateComponent } from './posts/create/create.component';
import { ParseComponent } from './parse/parse.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'login', component: AuthComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cabinet', component: CabinetComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'parse', component: ParseComponent},
    {path: 'post/create', component: CreateComponent},
    {path: 'post/:id', component: ViewComponent},
    {path: 'post/:id/update', component: UpdateComponent},
];
