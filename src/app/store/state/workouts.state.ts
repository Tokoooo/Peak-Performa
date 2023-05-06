export interface WorkoutState {
    workouts: any[]
    searchQuery: string;
    loading: boolean;
    error: string | null;
    currentPage: number,
    pageSize: number,
    totalCount: number
}

export enum WorkoutsActionTypes {
    LoadWorkouts = '[Workout] Load Workouts',
    LoadWorkoutsSuccess = '[Workout] Load Workouts Success',
    LoadWorkoutsFailure = '[Workout] Load Workouts Failure',
    SetSearchQuery = '[Workout] Set Search Query'
  }