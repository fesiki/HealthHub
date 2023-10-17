import { Component } from '@angular/core'; 

@Component({
  selector: 'app-main', 
   templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css'] 
})
export class MainComponent {

  tabItem: HTMLElement[] = [];
  tabContent: HTMLElement[] = [];

  constructor() {
    this.tabItem = Array.from(document.querySelectorAll<HTMLElement>('.tabs_btn'));
    this.tabContent = Array.from(document.querySelectorAll<HTMLElement>('.tabs_content_item'));

    this.tabItem.forEach((element) => {
      element.addEventListener('click', this.open.bind(this));
    });
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
