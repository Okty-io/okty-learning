import { Component, OnInit } from '@angular/core';
import { CookieConsentService } from "./core/services/cookie-consent.service";

@Component({
    selector: 'app-root',
    template: `
        <div style="min-height: calc(100% - 427px); ">
            <router-outlet #outlet="outlet"></router-outlet>
        </div>
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
