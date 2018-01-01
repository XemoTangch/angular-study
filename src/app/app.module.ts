import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

// service
import { HeroService } from './hero.service';

// router
import { RouterModule } from '@angular/router';

@NgModule({
    // declarations数组包含应用中属于该模块的组件、管道和指令的列表。 组件在被其它组件引用之前必须先在一个模块中声明过
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      // 定义路由path为空时重定向到dashboard
      RouterModule.forRoot([
          // path 用来匹配浏览器地址栏中的地址，component 需要的组件
          { path: 'heroes', component: HeroesComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: '', redirectTo: '/heroes', pathMatch: 'full' },
          { path: 'detail/:id', component: HeroesComponent },
      ])
  ],
    // 注册HeroService提供商，用于注入器创建服务对象，创建AppComment组件时，会创建HeroService的新实例
  providers: [
      HeroService
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
