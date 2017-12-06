import { Component, Input } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero/hero-detail.component.html',
    styleUrls: ['./hero/hero-detail.component.css']
})


export class HeroDetailComponent {
    // @Input() 用来表明该属性是可输入的属性
    @Input() hero: Hero;
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

