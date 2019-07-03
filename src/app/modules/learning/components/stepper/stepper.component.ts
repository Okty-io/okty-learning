import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { LanguageService } from "../../../../core/services/language.service";
import { Subscription } from "rxjs";
import { Directionality } from "@angular/cdk/bidi";

@Component({
    selector: 'app-learning-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper implements OnInit, OnDestroy {

    private subscription: Subscription;

    public language: string;

    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef, private languageService: LanguageService) {
        super(dir, changeDetectorRef);
    }

    ngOnInit(): void {
        this.subscription = this.languageService.getObservable().subscribe(language => this.language = language);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    @Input() title: string;

    onClick(target: number): void {
        if (target > this.selectedIndex) {
            while (this.selectedIndex < target) {
                if (!this.selected.completed) {
                    return;
                }
                this.selectedIndex += 1;
            }
        }

        if (target < this.selectedIndex) {
            this.selectedIndex = target;
        }
    }

    hasPrevious(): boolean {
        return this.selectedIndex > 0;
    }

    hasNext(): boolean {
        return this.selectedIndex + 1 < this.steps.length;
    }

    @Input()
    handleEnd(): void {
    }
}
