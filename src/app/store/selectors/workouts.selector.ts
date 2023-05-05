import { createFeatureSelector, createSelector } from "@ngrx/store";

import { WorkoutState } from "../state/workouts.state";

export const selectWorkout = createFeatureSelector<WorkoutState>('workout');

export const selectLoading = createSelector(
    selectWorkout,
    (state: WorkoutState) => state.loading
)

export const selectWorkouts = createSelector(
    selectWorkout,
    (state: WorkoutState) => state.workouts
)

export const selectError = createSelector(
    selectWorkout,
    (state: WorkoutState) => state.error
)

export const selectSetSearchQuery = createSelector(
    selectWorkout,
    (state: WorkoutState) => state.searchQuery
)