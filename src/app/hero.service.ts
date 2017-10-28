import { Injectable } from '@angular/core';

import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-hero';

// 可注入的服务
@Injectable()
export class HeroService {
    // stub 可以从任何地方获取hero数据，例如web服务，本地存储或模拟数据
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES); // promise 异步处理数据获取
    }
    // 模拟慢速连接
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}
