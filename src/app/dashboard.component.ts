import { Component, OnInit } from '@angular/core';

import { Hero } from './hero/hero';
import { HeroService } from './hero.service';

@Component ({
    selector: 'app-my-dashboard',
    templateUrl: './dashboard/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5)); // 使用Array.slice方法提取了第2,3,4,5个英雄
    }
}
