import { Component } from '@angular/core';

import { routes } from '../../app.routes';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {
  routes = this.parseRoutes(routes);

  // Get names of components to display in the navbar
  parseRoutes(routes: Array): Array {
    routes.forEach((route) => {
      // call property as array element to prevent potential transpiler errors
      route['name'] = route.component.name.replace('Component', '');
    });
    return routes;
  }
}
