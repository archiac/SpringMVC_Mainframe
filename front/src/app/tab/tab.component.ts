import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Tab} from './tab';
import {AppComponent} from "../app.component";


@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {
    @Input() tab: Tab;


    constructor(private app: AppComponent) {

    }

    ngOnInit() {
    }

    onEnterPress() {
        // this.tab.result += this.tab.command;
        // this.edittab =new Tab(this.tab.id,this.tab.subsystem_id,this.tab.command,this.tab.result,this.tab.timestamp);
        this.app.sendCommand(this.tab);
    }
}
