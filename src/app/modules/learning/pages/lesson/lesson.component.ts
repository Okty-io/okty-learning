import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonRepository } from '../../repositories/lesson.repository';
import { ActivatedRoute, Router } from '@angular/router';
import Lesson from '../../models/lesson';
import { TitleService } from "../../../../core/services/title.service";
import { LanguageService } from "../../../../core/services/language.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnDestroy {

    public loading: boolean;
    public lesson: Lesson;
    public language: string;

    private subsription: Subscription;

    constructor(private lessonRepository: LessonRepository,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private title: TitleService,
                private languageService: LanguageService) {
    }

    ngOnInit() {
        this.loading = true;
        this.initSteps();
        this.subsription = this.languageService.getObservable().subscribe(language => this.language = language);
    }

    ngOnDestroy(): void {
        if (this.subsription) {
            this.subsription.unsubscribe();
        }
    }

    private initSteps(): void {
        this.activatedRoute.params.subscribe((data) => {
            this.lessonRepository.getByChapterAndStepNumber(data.id, data.lesson).then((lesson: Lesson) => {
                this.lesson = lesson;
                this.title.set(this .lesson.name);

                this.lesson.steps.map((step) => step.validated = !step.action);

                this.loading = false;
            });
        });
    }

    handleEnd = () => {
        let completed = JSON.parse(localStorage.getItem('lesson_completed'));
        completed = !!completed ? completed : {};

        completed[this.lesson.id] = true;

        localStorage.setItem('lesson_completed', JSON.stringify(completed));

        this.router.navigate(['/', this.language, 'chapters']);
    }
}
