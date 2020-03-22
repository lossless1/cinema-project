import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponent } from './posts/posts.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { ViewComponent } from './posts/view/view.component';

import '../styles/styles.scss';
import '../styles/headings.css';
import { UpdateComponent } from './posts/update/update.component';
import { CreateComponent } from './posts/create/create.component';

// Services

import { AppService, InternalStateType } from './app.service';
import { HttpCustomService } from './services/http.custom.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { ParseComponent } from './parse/parse.component';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    UserService,
    PostService,
    AppService,
    HttpCustomService
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AuthComponent,
        RegisterComponent,
        CabinetComponent,
        PostsComponent,
        NavigationComponent,
        ViewComponent,
        UpdateComponent,
        CreateComponent,
        ParseComponent
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})

export class AppModule {

}
