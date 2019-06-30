import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './core/services/api.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { TitleService } from "./core/services/title.service";
import { NgcCookieConsentModule } from "ngx-cookieconsent";
import { cookieConfig } from "./core/configs/cookie-consent";
import { LanguageService } from "./core/services/language.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        NgcCookieConsentModule.forRoot(cookieConfig)
    ],
    providers: [
        ApiService,
        TitleService,
        LanguageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
