import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from "../../services/language.service";
import { Subscription } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    public language: string;
    public flagUrl: string;
    public displayLanguageSwitch: boolean;

    private languageSubscription: Subscription;
    private routerSubscription: Subscription;
    private flags: {};

    constructor(private languageService: LanguageService, private router: Router) {
    }

    ngOnInit(): void {
        this.displayLanguageSwitch = true;
        this.flags = {
            en: './assets/flags/french.svg',
            fr: './assets/flags/united-states.svg'
        };

        this.flagUrl = './assets/flags/french.svg';
        this.languageSubscription = this.languageService.getObservable().subscribe(language => {
            this.language = language;
            this.flagUrl = this.flags[language];
        });

        this.routerSubscription = this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }

            this.displayLanguageSwitch = /chapters\/?$/.test(event.url) || event.url.length <= 3;
        })
    }

    ngOnDestroy(): void {
        this.languageSubscription.unsubscribe();
        this.routerSubscription.unsubscribe();
    }

    changeLanguage() {
        const newLanguage = this.language === 'en' ? 'fr' : 'en';

        this.languageService.set(newLanguage);
    }
}
