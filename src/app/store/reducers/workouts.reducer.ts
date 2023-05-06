import { createReducer, on } from "@ngrx/store";
import { WorkoutActions } from "../actions";
import { WorkoutState } from "../state/workouts.state";
import { loadWorkouts, loadWorkoutsFailure, loadWorkoutsSuccess } from "../actions/workouts.action";

const initialState: WorkoutState = {
    workouts: [],
    loading: false,
    error: '',
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, // 10 items per page
    totalCount: 0
}
export const workoutReducer = createReducer(
    initialState,
    on(loadWorkouts, (state) => ({
      ...state,
      loading: true,
      error: null,
      searchQuery: ""
    })),
    on(loadWorkoutsSuccess, (state, { workouts }) => {
     return { ...state,
      workouts,
      loading: false,
      error: null,
      searchQuery: "",
      totalCount: workouts.length,
      currentPage: 1
     }
    }),
    on(loadWorkoutsFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
      searchQuery: ""
    }))
  );

