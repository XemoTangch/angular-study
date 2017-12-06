import { Component } from '@angular/core';

@Component({
    // 选择器
    selector: 'app-root',
    // 模板内容，templateUrl的值为html文件路径
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        <!--<app-my-heroes></app-my-heroes>-->
    `,
})

// 主组件
export class AppComponent {
    title = '英雄之名';
}
