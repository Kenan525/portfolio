import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeServiceService } from './services/theme-service.service';
import { DecimalPipe } from '@angular/common';
import { TemplateModule } from './template/template.module';
import { PagesModule } from './pages/pages.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule, PagesModule, NoopAnimationsModule, MatTooltipModule],
  providers: [ThemeServiceService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
