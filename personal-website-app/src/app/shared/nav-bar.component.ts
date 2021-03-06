import { Component } from '@angular/core';

@Component({
  selector: 'parker-nav-bar',
  styleUrls: ['./nav-bar.component.scss'],
  template:
  `
  <div class="nav-bar">
    <a href="https://github.com/ParkerReese" target="_blank">GitHub</a>
    <span class="seperator"> / </span>
    <a href="https://www.linkedin.com/in/parker-reese/" target="_blank">LinkedIn</a>
    <span class="seperator"> / </span>
    <a href="mailto:parker.reese@usask.ca" target="_blank">Email Me</a>
  </div>
  `
})
export class NavBarComponent {
}
