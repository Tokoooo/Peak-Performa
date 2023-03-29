import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { WorkoutService} from '../services/workout.service'
import { FormControl, FormGroup } from '@angular/forms'
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs'
import { __values } from 'tslib';



@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})


export class WorkoutsComponent implements OnInit {

  
  @Input() items:any

  @Output() filterChanged = new EventEmitter<any>()

  searchControl = new FormGroup({
    search: new FormControl(''),
    location: new FormControl('gym')
  })
  
  workoutData!: any[]

  items$ = this.workoutService.find({location: 'gym'})

  constructor(public workoutService: WorkoutService) {
    this.searchControl.valueChanges.subscribe((values) => {
      console.log();
      this.filterChanged.emit({
        query: values.search,
        loaction: values.location
      })
    })
  }
  ngOnInit(): void {
    this.getApi()
  }

  onFiltersChanged(filters: any) {
    this.items$ = this.workoutService.find(filters)
  }

  getApi(): any {
    this.workoutService.getApi().subscribe(
      (data) => {
        this.workoutData = data
      },
      (err) => {
        console.log(err);
      }
    );
  }

  exesLocation = ['gym', 'home']
   
}
