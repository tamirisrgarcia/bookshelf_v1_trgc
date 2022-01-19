import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dashboard } from '../modelosInterface/dashboard';
import { DashboardService } from './../servicosInterface/dashboard.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>;

  usuario = {userName: 'Matilde Costa', icone: 'remember_me'};

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }

      return this.cards$;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
    }
}
