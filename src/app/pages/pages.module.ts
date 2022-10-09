import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ServiceComponent } from './service/service.component';
import { QualificationComponent } from './qualification/qualification.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SwiperModule } from 'swiper/angular';
import { ProjectComponent } from './project/project.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import {PagesRoutingModule} from './pages-routing.module';
import {DefaultComponent} from './default/default.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    PagesRoutingModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
    DefaultComponent
  ],
})
export class PagesModule {}
