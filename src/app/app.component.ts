import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        <!--<app-my-heroes></app-my-heroes>-->
    `
})

export class AppComponent {
    title = '英雄之名';
}
