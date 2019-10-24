import {Component, Input, OnInit} from '@angular/core';
import {Tab} from './tab/tab';
import {Subscription} from 'rxjs';
import {TabServiceService} from './services/tab-service.service';
import {TabComponent} from "./tab/tab.component";

// export const TABS  = [{
//     name: 'IMS',
//     tab:
//         {
//             txt: '',
//             result: ''
//         }
//     },
//     {name: 'CICS',
//         tab:
//             {
//                 txt: '',
//                 result: ''
//             }
//             },
//     {name: 'MQ',
//         tab:
//             {
//                 txt: '',
//                 result: ''
//             }
//     },
//     {name: 'DB2',
//         tab:
//             {
//                 txt: '',
//                 result: ''
//             }
//     },
//     {name: 'FTP',
//         tab:
//     {
//         txt: '',
//         result: ''
//     }
//     }
//    ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public tabs: Tab[];
    private subscriptions: Subscription[] = [];

    public tab:Tab;

    constructor(private tabservice: TabServiceService) {
    }

    ngOnInit() {
        this.loadTabsValues();
    }

    private loadTabsValues(): void {
        this.subscriptions.push(this.tabservice.getTabs().subscribe(s => {
            this.tabs = s as Tab[];
            console.log(this.tabs);
        }));
    }


    public sendCommand(tab:Tab):void{
        this.subscriptions.push(this.tabservice.saveCommand(tab).subscribe(()=>{
                this.loadTabsValues()
        }));
    }
}
