import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SkillComponent} from './skill/skill.component';
import {ServiceComponent} from './service/service.component';
import {QualificationComponent} from './qualification/qualification.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {DefaultComponent} from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'services',
    component: ServiceComponent
  },
  {
    path: 'experiences',
    component: QualificationComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
