import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { LanguageService } from "../../../../core/services/language.service";

@Component({
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    constructor(private language: LanguageService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.language.set(params.lang);
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
