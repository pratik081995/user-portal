import { User } from './user.model';
import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnChanges, OnInit {
    @Input() user: User;
    @Input() message: string;

    allMsgChangeLogs: string[] = [];
    allUserChangeLogs: string[] = [];



    ngOnChanges(changes: SimpleChanges) {

        for (let propName in changes) {
            let change = changes[propName];

            let curVal = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);
            let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

            if (propName === 'message') {
                this.allMsgChangeLogs.push(changeLog);
            } else if (propName === 'user') {
                this.allUserChangeLogs.push(changeLog);
            }
        }
    }

    ngOnInit() {
        this.message = "Welcome";
        console.log(`ngOnInit  - Message is ${this.message}`);

    }
}