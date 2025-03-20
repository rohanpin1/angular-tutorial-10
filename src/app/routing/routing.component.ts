import { Component } from '@angular/core';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {
  // in routing, we make some components for pages, import and register the components in the root file (app.route.ts) file. 
  // but we don't register these components in app.component.ts
  // do import the RouterLink, RouterOutlet in app.component.ts
  // now go to app.component.html, and put router-outlet tag
  // make links for open pages with routes
  // the one thing you may notice in url bar is, changing the url when click on links
}
