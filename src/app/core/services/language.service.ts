import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Injectable()
export class LanguageService {

    private language: string;
    private subject: BehaviorSubject<string>;

    private currentUrl;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.language = 'en';
        this.subject = new BehaviorSubject(this.language);

        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }

            this.currentUrl = event.url;
        });
    }

    public set(language: string): void {
        if (this.language === language) {
            return;
        }

        this.language = language;
        this.subject.next(language);

        console.log(this.currentUrl);
        const newUrl = '/' + language + this.currentUrl.substring(3);

        this.router.navigate([newUrl]);
    }

    public getObservable(): Observable<string> {
        return this.subject.asObservable();
    }

    public getFullLanguage(): string {
        const languages = {
            'en': 'en_US',
            'fr': 'fr_FR'
        };

        return languages[this.language] ? languages[this.language] : 'en_US';
    }
}
