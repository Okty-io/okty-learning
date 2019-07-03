import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgressComponent } from './components/progress/progress.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { ChapterRepository } from './repositories/chapter.repository';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LessonComponent } from './pages/lesson/lesson.component';
import { LessonRepository } from './repositories/lesson.repository';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { QcmComponent } from './components/actions/qcm/qcm.component';
import { ActionDirective } from './directives/action.directive';
import { VoidComponent } from './components/actions/void/void.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlobsComponent } from './components/blobs/blobs.component';
import { LessonStepComponent } from './components/lesson-step/lesson-step.component';

import { ActionRepository } from './repositories/action.repository';
import { MarkdownModule } from 'ngx-markdown';
import { LanguageComponent } from './pages/language/language.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
    declarations: [
        IndexComponent,
        ChaptersComponent,
        ProgressComponent,
        ChapterComponent,
        LessonCardComponent,
        LessonComponent,
        StepperComponent,
        ActionDirective,
        VoidComponent,
        QcmComponent,
        LessonStepComponent,
        BlobsComponent,
        LanguageComponent
    ],
    imports: [
        CommonModule,
        LearningRoutingModule,
        SharedModule,
        FontAwesomeModule,
        CdkStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot(),
        CoreModule
    ],
    providers: [
        ChapterRepository,
        LessonRepository,
        ActionRepository
    ],
    entryComponents: [
        VoidComponent,
        QcmComponent,
    ]
})
export class LearningModule {
}
