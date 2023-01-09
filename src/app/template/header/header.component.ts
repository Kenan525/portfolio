import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import {NavigationPageService} from 'src/app/services/navegation-pages.service';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private stop$ = new Subject<void>();
  public showMenu = false;
  public defaultTheme = 'dark';
  public selection = 'skills';

  public itemsMenu = [
    {
      name: 'About',
      icon: 'iconsminds-administrator',
      route: 'about',
    },
    {
      name: 'Skills',
      icon: 'iconsminds-file-clipboard-file---text',
      route: 'skills',
    }/*,
    {
      name: 'Services',
      icon: 'iconsminds-handshake',
      route: 'services',
    },
    {
      name: 'Experiences',
      icon: 'iconsminds-suitcase',
      route: 'experiences',
    }*/,
    {
      name: 'Portfolio',
      icon: 'iconsminds-management',
      route: 'portfolio',
    },
    {
      name: 'Contact',
      icon: 'iconsminds-smartphone-4',
      route: 'contact',
    },
  ];

  constructor(
    private readonly navigationPageService: NavigationPageService,
    private readonly themeService: ThemeServiceService
  ) {}

  ngOnInit(): void {
    this.observarSeleccionadoDesdeOtroComponente();
  }
  ngOnDestroy(): void {
    this.stop();
  }

  onClick(elem: string): void {
    this.showMenu = false;
    const element: HTMLElement = document.getElementById(elem);
    element.scrollIntoView({behavior: 'smooth'});
  }

  observarSeleccionadoDesdeOtroComponente(): void {
    this.navigationPageService.seleccionado$
      .pipe(takeUntil(this.stop$))
      .subscribe((selection: string) => {
        this.selection = selection;
      });
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  changeTheme(): void {
    if (this.defaultTheme === 'dark') {
      this.defaultTheme = 'light';
      this.themeService.setDefaultTheme();
    } else {
      this.defaultTheme = 'dark';
      this.themeService.setDarkTheme();
    }
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
