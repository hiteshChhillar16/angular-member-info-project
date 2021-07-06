import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand-lg text-white' style='background:#DD571C'>
        <a class='navbar-brand text-white'>{{pageTitle}}</a>
        <ul class='nav nav-tabs'>
          <li class='nav-item'><a class='nav-link text-white' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li class='nav-item'><a class='nav-link text-white' routerLinkActive='active' routerLink='/members'>Member List</a></li>
          <li class='nav-item'><a class='nav-link text-white' routerLinkActive='active' routerLink='/addMember'>Add Member</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Member Info Management';
}
