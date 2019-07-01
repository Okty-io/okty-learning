import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { LanguageComponent } from "./pages/language/language.component";

const routes: Routes = [
    {
        path: ':lang',
        component: LanguageComponent,
        children: [
            {
                path: 'chapters',
                component: ChaptersComponent
            },
            {
                path: 'chapters/:id/:lesson',
                component: LessonComponent
            },
            {
                path: '**',
                component: IndexComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/en'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LearningRoutingModule {
}
