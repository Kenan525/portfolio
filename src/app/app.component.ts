import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ThemeServiceService } from './services/theme-service.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DecimalPipe } from '@angular/common';
import {NavigationPageService} from './services/navegation-pages.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  private stop$ = new Subject<void>();
  buttonColors: boolean = false;
  collapsed = false;
  init = false;

  reachedTheEnd2: boolean;

  public reachedTheEnd: boolean;

  @ViewChild('intro', { static: true }) home: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('skill') skill: ElementRef;
  @ViewChild('services') services: ElementRef;
  @ViewChild('qualification') qualification: ElementRef;
  @ViewChild('portfolio') portfolio: ElementRef;
  @ViewChild('project') project: ElementRef;
  @ViewChild('testimonial') testimonial: ElementRef;
  @ViewChild('contact') contact: ElementRef;

  title = 'scroll-page';

  constructor(
    private readonly themeService: ThemeServiceService,
    private decimalPipe: DecimalPipe,
    private readonly navigatePagesService: NavigationPageService
  ) {}
  ngAfterViewInit(): void {}

  verificarIdElemtHtml(): void {
    const sections = [
      this.home,
      this.about,
      this.contact,
      this.services,
      this.project,
      this.portfolio,
      this.skill,
      this.qualification,
      this.contact,
    ];
    const scrollY = window.pageYOffset;

    sections.forEach((element: ElementRef) => {
      if (element) {
        const current = element.nativeElement;
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        const sectionID = current.id;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.navigatePagesService.seleccionado(sectionID);
        } else {
        }
      }
    });
  }

  ngOnInit() {
    this.changeNavigation();
    this.defaultColor();
    this.defaultTheme();
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.todo',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(
              this.decimalPipe.transform(options.progress, '1.2-2')
            );
            this.reachedTheEnd2 = value > 0.07;
            this.reachedTheEnd = value > 0.84;
            this.verificarIdElemtHtml();
          }
        },
      },
    });
    setTimeout(() => {}, 1000);
  }

  ngOnDestroy(): void {
    this.stop();
  }

  changeNavigation(): void {
    this.navigatePagesService.pagina$
      .pipe(takeUntil(this.stop$))
      .subscribe((page: string) => {
        switch (page) {
          case 'intro':
            this.elementToHtmlSelection(this.home);
            break;
          case 'Acerca':
            this.elementToHtmlSelection(this.about);
            break;
          case 'Habilidades':
            this.elementToHtmlSelection(this.skill);
            break;
          case 'Servicios':
            this.elementToHtmlSelection(this.services);
            break;
          case 'Experiencia':
            this.elementToHtmlSelection(this.qualification);
            break;
          case 'Portafolio':
            this.elementToHtmlSelection(this.portfolio);
            break;
          case 'Proyecto':
            this.elementToHtmlSelection(this.project);
            break;
          case 'Testimonio':
            this.elementToHtmlSelection(this.testimonial);
            break;
          case 'Contacto':
            this.elementToHtmlSelection(this.contact);
            break;

          default:
            break;
        }
      });
  }

  defaultTheme(): void {
    this.themeService.setDarkTheme();
    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }

  defaultColor(): void {
    this.themeService.setPurple();
  }

  elementToHtmlSelection(elem: ElementRef): void {
    const elementToNativeElement = elem.nativeElement;
    elementToNativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onClick(): void {
    const elem = document.getElementById('intro');
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  public toggle(menu: HTMLElement): void {
    const list = Array.prototype.slice.call(menu.children) as HTMLElement[];
    this.init = true;
    this.collapsed = !this.collapsed;

    gsap.to(menu, {
      translateY: 0,
      duration: 0.6,
    });
    this.animateElements(this.collapsed, list, menu).then();
  }

  private async animateElements(collapse: boolean, list: HTMLElement[], menu): Promise<void> {
    this.buttonColors = true;
    if (collapse) {
      for (let i = 0; i < list.length; i++) {
        const sliced = list.slice(i, list.length);
        gsap.to(sliced, {
          translateY: 55 * i,
          delay: 0.3 * i,
          duration: 0.6,
        });
      }
      setTimeout(() => {
        this.buttonColors = false;
      }, 1000);
    } else {
      gsap
        .to(list, {
          y: 0,
          duration: 0.3,
        })
        .then(() => {
          gsap.to(menu, {
            translateY: -80,
            duration: 0.3,
          });
          this.buttonColors = false;
        });
    }
  }

  colorPurple(): void {
    this.themeService.setPurple();
  }

  colorGreen(): void {
    this.themeService.setGreen();
  }

  colorPink(): void {
    this.themeService.setPink();
  }

  colorGold(): void {
    this.themeService.setGold();
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
