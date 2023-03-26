import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Workout {
  id: number;
  name: string;
  weight?: number;
  height?: number;
  calories?: number;
  type?: workoutEnum;
  duration?: number;
  sets: number;
  reps: number;
  description: string;
}

enum workoutEnum {
  weightLifting = 'weightLifting',
  aerobic = 'aerobic',
  boneStrengthening = 'boneStrengthening',
  running = 'running',
}

@Injectable({
  providedIn: 'root',
})
export class WorkoutService<T extends { [x: string]: any; id: number }> {
  private items: T[];

  constructor(private http: HttpClient) {
    this.items = [];
  }

  add(item: T) {
    this.items.push(item);
  }
  remove(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  update(id: number, updates: Partial<T>) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updates };
    }
  }

  find(query: Partial<T>) {
    return this.items.filter((item) => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }

  findOne(query: Partial<T>) {
    return this.items.find((item) => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }

  count() {
    return this.items.length;
  }

  sumOfBodyLength() {
    return this.items.reduce((sum, item) => sum + item['name'].length, 0);
  }
}
