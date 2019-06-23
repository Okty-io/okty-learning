import { Component, OnInit } from '@angular/core';
import { TitleService } from "../../../../core/services/title.service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    constructor(private title: TitleService) {
    }

    ngOnInit() {
        this.title.set('Home');
    }
}
