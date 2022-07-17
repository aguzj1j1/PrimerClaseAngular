import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as FeatureLoginActions from './login.actions';


@Injectable()
export class FeatureLoginEffects {

  loadFeatureLogins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FeatureLoginActions.loadFeatureLogins),

    );
  });


  constructor(private actions$: Actions) {}
}
