import { createAction, props } from '@ngrx/store';

export const loadWorkouts = createAction('[Workout] Load Workouts');
export const loadWorkoutsSuccess = createAction('[Workout] Load Workouts Success', props<{ workouts: any[] }>());
export const loadWorkoutsFailure = createAction('[Workout] Load Workouts Failure', props<{ error: any }>());
export const setSearchQuery = createAction('[Workout] Set Search Query', props<{ query: string | undefined | null}>());
export const setCurrentPage = createAction('[Workout] Set Current Page', props<{ page: number }>());
