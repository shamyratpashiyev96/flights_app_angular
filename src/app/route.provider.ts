import { PermissionDirective, PermissionService, RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      { 
        path: "/flights-control",
        name: "::Menu:FlightControl", 
        iconClass: "fa fa-book", 
        order: 2, 
        layout: eLayoutType.application
      },
      {
        path: "/airports",
        name: "::Menu:Airports",
        parentName: "::Menu:FlightControl",
        iconClass: "fa fa-building",
        layout: eLayoutType.application,
      },
      {
        path: "/passengers",
        name: "::Menu:Passengers",
        parentName: "::Menu:FlightControl",
        iconClass: "fa fa-user",
        layout: eLayoutType.application,
      },
      {
        path: "/flights",
        name: "::Menu:Flights",
        parentName: "::Menu:FlightControl",
        iconClass: "fa fa-plane",
        layout: eLayoutType.application,
      },
    ]);
  };
}
