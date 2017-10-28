import {Component, OnInit} from '@angular/core';
import { HeroService } from './hero.service';

/*
// const 必须放在@Compoent上面
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];*/

// @Component下面只能放一个类？
export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = '英雄之旅';
    selectedHero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService) { }
    // 初始化后钩子，获取数据
    ngOnInit(): void {
        this.getHeroes();
    }
    // 获取数据方法
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        // this.heroes = this.heroService.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
