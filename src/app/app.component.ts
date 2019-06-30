import { Component, OnInit } from '@angular/core';
import { CookieConsentService } from "./core/services/cookie-consent.service";

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <div style="min-height: calc(100% - 427px); ">
            <router-outlet #outlet="outlet"></router-outlet>
        </div>
        <app-footer></app-footer>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(private cookieConsent: CookieConsentService) {
    }

    ngOnInit(): void {
        this.cookieConsent.init();
    }

}
