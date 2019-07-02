import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="min-height: calc(100% - 427px); ">
            <router-outlet #outlet="outlet"></router-outlet>
        </div>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
