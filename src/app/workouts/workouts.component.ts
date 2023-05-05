import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { setCurrentPage, setSearchQuery } from '../store/actions/workouts.action';
import { WorkoutState } from '../store/state/workouts.state';
import { selectWorkouts } from '../store/selectors/workouts.selector'
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NumberInput } from '@angular/cdk/coercion';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less'],
})

export class WorkoutsComponent implements OnInit {


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  p!: number;
  itemsPerPage!: number;
  workoutID!: number;

  dataSource = new MatTableDataSource<any>([]);

  workoutData = this.store.pipe(select(selectWorkouts));
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
totalItems: NumberInput;
pageSize: NumberInput;
currentPage: any;
  
  constructor(private store: Store<WorkoutState>, private http: HttpClient) {
    this.searchForm.valueChanges.subscribe((values) => {
     this.store.dispatch(setSearchQuery({ query: values.search }));
    });
  }


  ngOnInit(): void {
    this.store.dispatch(setSearchQuery({ query : ""}));
  }

  pageChanged(event: PageEvent): void {
    this.store.dispatch(setCurrentPage({ page: event.pageIndex + 1 }));
  }

}
