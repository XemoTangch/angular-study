import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';


import { Hero } from './hero/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero/hero-detail.component.html',
    styleUrls: ['./hero/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
    // 构造函数保存私有变量
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    // @Input() 用来表明该属性是可输入的属性
    @Input() hero: Hero;
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}

//
// import { Component, Input } from '@angular/core';
//
// import { Hero } from './hero/hero';
// @Component({
//     selector: 'hero-detail',
//     template: `
//     <div *ngIf="hero">
//       <h2>{{hero.name}} details!</h2>
//       <div><label>id: </label>{{hero.id}}</div>
//       <div>
//         <label>name: </label>
//         <input [(ngModel)]="hero.name" placeholder="name"/>
//       </div>
//     </div>
//   `
// })
// export class HeroDetailComponent {
//     @Input() hero: Hero;
// }

