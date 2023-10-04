import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


const tabItem = document.querySelectorAll<HTMLElement>('.tabs_btn');
const tabContent = document.querySelectorAll<HTMLElement>('.tabs_content_item');

tabItem.forEach(function (element) {
    element.addEventListener('click', open);
});

function open(evt: MouseEvent) {
    const tabTarget = evt.currentTarget as HTMLElement;
    const button = tabTarget.dataset['button'];

    tabItem.forEach(function (item) {
        item.classList.remove('tabs_btn--active');
    });

    tabTarget.classList.add('tabs_btn--active');

    tabContent.forEach(function (item) {
        item.classList.remove('tabs_content_item--active');
    });

    const contentItem = document.querySelector<HTMLElement>(`#${button}`);
    if (contentItem) {
        contentItem.classList.add('tabs_content_item--active');
    }
}
