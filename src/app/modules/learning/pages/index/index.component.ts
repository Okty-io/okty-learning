import { Component, OnInit } from '@angular/core';
import { TitleService } from "../../../../core/services/title.service";
import { LanguageService } from "../../../../core/services/language.service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public language: string;

    constructor(private title: TitleService, private languageService: LanguageService) {
    }

    ngOnInit() {
        this.title.set('Home');

        this.languageService.getObservable().subscribe((language) => this.language = language);
    }
}
