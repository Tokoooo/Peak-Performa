import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, withLatestFrom  } from 'rxjs/operators';
import { of } from 'rxjs';
import { WorkoutService } from '../../services/workout.service';
import {
  loadWorkouts,
  loadWorkoutsSuccess,
  loadWorkoutsFailure,
  setSearchQuery,
} from '../actions/workouts.action';
import { WorkoutsActionTypes } from '../state/workouts.state';

@Injectable()
export class WorkoutEffects {
  currentPage: any;
  pageSize: any;
  constructor(
    private actions$: Actions,
    private workoutService: WorkoutService
  ) {}


  loadWorkouts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<ReturnType<typeof setSearchQuery>>(WorkoutsActionTypes.SetSearchQuery),
      withLatestFrom(this.actions$.pipe(ofType<ReturnType<typeof setSearchQuery>>(WorkoutsActionTypes.SetSearchQuery))),
      mergeMap(([action, search]) =>
        this.workoutService.getApi(search.query).pipe(
          map((workouts) => loadWorkoutsSuccess({workouts})),
          catchError((error) => of(loadWorkoutsFailure({ error })))
        )
      )
    );
  });
}


  // loadWorkouts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(setSearchQuery),
  //     mergeMap((search) =>
  //       this.workoutService.getApi(search.query).pipe(
  //         map((workouts) => loadWorkoutsSuccess({workouts})),
  //         catchError((error) => of(loadWorkoutsFailure({ error })))
  //       )
  //     )
  //   );
  // });

