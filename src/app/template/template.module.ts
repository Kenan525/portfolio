import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {PagesRoutingModule} from '../pages/pages-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class TemplateModule {}
