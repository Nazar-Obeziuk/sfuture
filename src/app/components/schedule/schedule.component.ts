import { Component, OnInit } from '@angular/core';
import { UserExerciseService } from '../../shared/services/user-exercise/user-exercise.service';
import { SlicePipe } from '../../shared/pipes/slice/slice.pipe';
import { NgClass } from '@angular/common';
import { IDayData } from '../../shared/interfaces/scheduler-date/scheduler-date.interface';
import { IExerciseResponse } from '../../shared/interfaces/exercise/exercise.interface';
import { SchedulerService } from '../../shared/services/scheduler/scheduler.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [SlicePipe, NgClass],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})

export class ScheduleComponent implements OnInit {

  public lengthOfAllUserExercises: IExerciseResponse[] = [];
  public nameDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public percentCount = 0;
  public daysOfWeek: IDayData[] = [];
  public daysOfCurrentWeek: any = [];
  public currentDate = new Date();
  // public dayData!: IDayData;
  public todaysDate!: string;
  
  constructor(
    private userExerciseService: UserExerciseService,
    private schedulerService: SchedulerService,
  ) {
    this.todaysDate = this.currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }
  
  ngOnInit(): void {
    this.setTodaysDay();
    this.getCurrentWeek();
    this.getUserActivity();
    this.getDaysOfCurrentWeek();
    this.setDaysForSchedule();
    this.getPercentOfUserActivity();
    this.setPercentForScheduleDays();
  }

  getCurrentWeek(): void {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    for (let day = 0; day < 7; day++) {
      const currentDay = new Date(startOfWeek);

      currentDay.setDate(startOfWeek.getDate() + day);

      const dayOfWeek = currentDay.toLocaleDateString('en-US', { weekday: 'long' });
      const formattedDate = currentDay.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

      const dayObject = {
        date: formattedDate,
        nameOfDay: dayOfWeek,
        percentCount: 0,
      }
      
      this.daysOfWeek.push(dayObject);
    }
  }

  getUserActivity(): void {
    this.userExerciseService.getAllUserExercise().subscribe(data => {
      this.lengthOfAllUserExercises = data as IExerciseResponse[];
      const lengthOfCompletedExercises = this.lengthOfAllUserExercises.filter(exercise => exercise.completed === true);
      this.percentCount = (lengthOfCompletedExercises.length / this.lengthOfAllUserExercises.length) * 100;

      this.schedulerService.getAllScheduleDays().subscribe(data => {
        const todaySchedule = data.find(day => day['date'] === this.todaysDate);
  
        if (todaySchedule) {
          todaySchedule['percentCount'] = this.percentCount;
  
          const todayIndex = this.daysOfWeek.findIndex(day => day.date === this.todaysDate);
          if (todayIndex !== -1) {
            this.daysOfWeek[todayIndex].percentCount = this.percentCount;
          }
  
          this.schedulerService.updateScheduleDay(todaySchedule as IDayData, todaySchedule.id).then(() => {});
        }
      });
    });
  }

  getDaysOfCurrentWeek(): void {
    const storedDaysOfWeekString = localStorage.getItem('daysOfCurrentWeek');
    if (storedDaysOfWeekString) {
      const res = JSON.parse(storedDaysOfWeekString);
      console.log(res);
    }
  }

  setDaysForSchedule(): void {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    for (let day = 0; day < 7; day++) {
      const currentDay = new Date(startOfWeek);

      currentDay.setDate(startOfWeek.getDate() + day);

      const dayOfWeek = currentDay.toLocaleDateString('en-US', { weekday: 'long' });
      const formattedDate = currentDay.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

      const dayObject = {
        date: formattedDate,
        nameOfDay: dayOfWeek,
        percentCount: 0,
      }
      
      this.daysOfWeek.push(dayObject);
    }
    console.log(this.daysOfWeek);
  }

  setTodaysDay(): void {
    const todaysDate = {
      date: this.todaysDate,
      nameOfDay: this.nameDaysOfWeek[this.currentDate.getDay()],
      percentCount: 0,
    };
  
    this.schedulerService.getAllScheduleDays().subscribe(data => {
      if (data.length === 0) {
        this.schedulerService.setScheduleDay(todaysDate).then(() => {});
      } else {
        const existsForToday = data.some(day => day['date'] === this.todaysDate);
        
        if (!existsForToday) {
          this.schedulerService.setScheduleDay(todaysDate).then(() => {});
        }
      }
    });
  }

  
  getPercentOfUserActivity(): void {
    this.userExerciseService.getAllUserExercise().subscribe(data => {
      this.lengthOfAllUserExercises = data as IExerciseResponse[];
      const lengthOfCompletedExercises = this.lengthOfAllUserExercises.filter(exercise => exercise.completed === true);
      this.percentCount = (lengthOfCompletedExercises.length / this.lengthOfAllUserExercises.length) * 100;
      
      this.schedulerService.getAllScheduleDays().subscribe(data => {
        const updatePromises = data.map((day) => {
          if (this.todaysDate === day['date']) {
            day['percentCount'] = this.percentCount;
            this.schedulerService.updateScheduleDay(day as IDayData, day.id);
          }
          return Promise.resolve();
        });
          
        Promise.all(updatePromises).then(() => {});
      });
    });
  }
    
  setPercentForScheduleDays(): void {
    this.schedulerService.getAllScheduleDays().subscribe(data => {
      data.forEach((day) => {
        this.daysOfWeek.forEach((scheduleDay) => {
          if (scheduleDay.nameOfDay === day['nameOfDay']) {
            scheduleDay.percentCount = day['percentCount']
          }
        })
      });
    });
  }

}

