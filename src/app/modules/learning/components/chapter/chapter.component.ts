import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import Chapter from '../../models/chapter';
import { TitleService } from "../../../../core/services/title.service";
import { LanguageService } from "../../../../core/services/language.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-learning-chapter',
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit, OnDestroy {

    @Input() chapter: Chapter;

    public language: string;

    private subscription: Subscription;

    constructor(private title: TitleService, private languageService: LanguageService) {
    }

    ngOnInit() {
        this.title.set('Chapters');
        this.subscription = this.languageService.getObservable().subscribe(language => this.language = language);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
