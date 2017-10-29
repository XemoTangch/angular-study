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
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: 'heroes', component: HeroesComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ])
  ],
  providers: [
      HeroService
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
