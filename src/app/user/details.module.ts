import { DetailsComponent } from './details.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
    ],
    bootstrap: [
        DetailsComponent
    ]
})
export class AppModule { } 