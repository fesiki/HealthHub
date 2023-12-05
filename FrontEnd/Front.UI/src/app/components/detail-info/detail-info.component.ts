import { Component } from '@angular/core';
import { GoogleAuthcService } from 'src/app/services/google-auth/google-authc.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent {
  isUserAuthenticated = false;
  tabItem: HTMLElement[] = [];
  tabContent: HTMLElement[] = [];

  constructor(private google: GoogleAuthcService) {
    this.tabItem = Array.from(document.querySelectorAll<HTMLElement>('.tabs_btn'));
    this.tabContent = Array.from(document.querySelectorAll<HTMLElement>('.tabs_content_item'));

    this.tabItem.forEach((element) => {
      element.addEventListener('click', this.open.bind(this));
    });
  }

  showData()
  {
    const data = this.google.getProfile();
    console.log(data);
  }
  
  ngOnInit() {
    const menuBtn: Element | null = document.querySelector('.menu_btn');
    const menu: HTMLElement | null = document.querySelector('.menu_list');

    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu_list--active');
      });
    }
  }
  
  
  open(evt: MouseEvent) {
    const tabTarget = evt.currentTarget as HTMLElement;
    const button = tabTarget.dataset['button'];

    this.tabItem.forEach((item) => {
      item.classList.remove('tabs_btn--active');
    });

    tabTarget.classList.add('tabs_btn--active');

    this.tabContent.forEach((item) => {
      item.classList.remove('tabs_content_item--active');
    });

    const contentItem = this.tabContent.find((item) => item.id === button);
    if (contentItem) {
      contentItem.classList.add('tabs_content_item--active');
    }
  }
}

