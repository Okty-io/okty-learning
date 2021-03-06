import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import Step from '../../models/step';
import { MarkdownService } from "ngx-markdown";

@Component({
    selector: 'app-learning-lesson-step',
    templateUrl: './lesson-step.component.html',
    styleUrls: ['./lesson-step.component.scss'],
    encapsulation: ViewEncapsulation.None // Workaround for markdown style
})
export class LessonStepComponent implements OnInit {

    @Input() step: Step;

    public markdown: string;

    constructor(private markdownService: MarkdownService) {
    }

    ngOnInit(): void {
        this.markdown = this.markdownService.compile(this.step.text);
    }

    completeStep(event: boolean): void {
        this.step.validated = event;
    }
}
