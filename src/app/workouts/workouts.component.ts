import { Component, Output } from '@angular/core';
import { WorkoutService, Workout} from '../services/workout.service'


enum workoutEnum {
  weightLifting = "weightLifting",
  aerobic = "aerobic",
  boneStrengthening = "boneStrengthening",
  running = "running"
}


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent {
  constructor(private virtualStorageService: WorkoutService<Workout>) {
    this.virtualStorageService.add({
        id: 1,
        description: "",
        reps: 0,
        sets: 0,
        name: 'Tornike',
        weight: 85,
        height: 1.82,
        calories: 300,
        type: workoutEnum.running,
        duration: 30
    })

    this.virtualStorageService.update(1, {calories: 350});
    this.virtualStorageService.remove(1)
    const sentItems = this.virtualStorageService.find( {name: 'Giorgi'})
    const findOneItem = this.virtualStorageService.findOne( {name: "nikusha"})
    const totalWorkout = this.virtualStorageService.count()
    const totalLengthOfWorkout = this.virtualStorageService.sumOfBodyLength()
}

@Output()  workouts: Workout[] = [
  {id: 0, name: 'Push-ups', description: 'A basic exercise that works your chest, triceps, and shoulders', duration: 10, sets: 3, reps: 10},
  {id: 1, name: 'Squats', description: 'A compound that works with your legs, glutes and cores', duration: 15, sets: 4, reps: 6},
  {id: 2, name: 'Sit-ups', description: 'An abdominal exercise that strengthens your core', duration: 5, sets: 2, reps: 25}
]
}
