import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChapterRepository } from '../../repositories/chapter.repository';
import Chapter from '../../models/chapter';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chapters',
    templateUrl: './chapters.component.html',
    styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit, OnDestroy {

    public loading: boolean;
    public percentage: number;
    public chapters: Chapter[];
    private chapterSubscription: Subscription;

    constructor(private chapterRepository: ChapterRepository) {
    }

    ngOnInit() {
        this.loading = true;
        this.percentage = 0;
        this.chapters = [];

        this.chapterSubscription = this.chapterRepository.getAll()
            .subscribe((chapters: Chapter[]) => {
                this.loading = false;
                this.chapters = chapters;

                setTimeout(() => this.updateProgress(), 0);
            });
    }

    ngOnDestroy(): void {
        this.chapterSubscription.unsubscribe();
    }

    private updateProgress(): void {
        let completed = JSON.parse(localStorage.getItem('lesson_completed'));
        completed = !!completed ? completed : {};

        let lessonCount = 0;
        let lessonCompleted = 0;

        this.chapters.forEach((chapter) => {
            chapter.lessons.forEach((lesson) => {
                lessonCount++;
                if (completed.hasOwnProperty(lesson.id)) {
                    lessonCompleted++;
                }
            })

        });

        this.percentage = Math.floor((lessonCompleted / lessonCount) * 100);
    }
}
