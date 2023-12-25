import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanService } from '../../shared/services/plan/plan.service';
import { IPlan } from '../../shared/interfaces/plan/plan.interface';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [DatePipe, NgClass, ReactiveFormsModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent implements OnInit {

  public eventItem!: IPlan;
  public today = new Date();
  public month = this.today.getMonth();
  public year = this.today.getFullYear();
  public months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  public days: {day: number, name: string}[] = [];
  public activeDay!: number;
  public isEventModalOpen = false;
  public eventForm!: FormGroup;
  public dayName!: string;
  public eventDateName!: string;
  public eventsArray: IPlan[] = [];
  public dayOfEvent: number[] = [];

  constructor(
    private fb: FormBuilder,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.initCalendar();
    this.initEventForm();
  }

  initEventForm(): void {
    this.eventForm = this.fb.group({
      eventName: [null, Validators.required],
      eventTimeFrom: [null, Validators.required],
      eventTimeTo: [null, Validators.required],
      day: [null],
      month: [null],
      year: [null],
    })
  }

  initCalendar(): void {
    const firstDay = new Date(this.year, this.month, 1);
    const lastDay = new Date(this.year, this.month + 1, 0);
    const prevLastDay = new Date(this.year, this.month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    for (let x = day; x > 0; x--) {
      this.days.push({ day: prevDays - x + 1, name: 'prev' });
    }

    for (let i = 1; i <= lastDate; i++) {
      let event = false;

      this.planService.getAllEvents().subscribe(data => {
        data.forEach((eventObj) => {
          if (eventObj['day'] === i && eventObj['month'] === this.month + 1 && eventObj['year'] === this.year) {
            event = true;
          }
        })
      })

      if (i === new Date().getDate() && this.year === new Date().getFullYear() && this.month === new Date().getMonth()) {
        this.activeDay = i;
        this.getActiveDay(i);
        this.getUserEvents(i);

        if (event) {
          this.days.push({ day: i, name: 'event' });
        } else {
          this.days.push({ day: i, name: 'today' });
        }
      } else {
        if (event) {
          this.days.push({ day: i, name: 'event' });
        } else {
          this.days.push({ day: i, name: 'day' });
        }
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      this.days.push({ day: j, name: 'next' });
    }
  }

  prevMonth(): void {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.days = [];
    this.initCalendar();
  }

  nextMonth(): void {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.days = [];
    this.initCalendar();
  }

  goToTodaysDate(): void {
    this.today = new Date();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.days = [];
    this.initCalendar();
  }

  getDateInput(e: any): void {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9/]/g, '');
    if (inputValue.length === 2) {
      inputValue += '/';
    }
    if (inputValue.length > 7) {
      inputValue = inputValue.slice(0, 7);
    }
    if (e.inputType === 'deleteContentBackward') {
      if (inputValue.length === 3) {
        inputValue = inputValue.slice(0, 2);
      }
    }

    e.target.value = inputValue;
  }

  goToInputDate(inputValue: any): void {
    const dateArr = inputValue.split('/');
    if (dateArr.length === 2) {
      if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
        this.month = dateArr[0] - 1;
        this.year = dateArr[1];
        this.days = [];
        this.initCalendar();
        return;
      }
    }
    alert('Invalid date');
  }

  toggleAddEventModal(): void {
    this.isEventModalOpen = !this.isEventModalOpen;
  }

  setDateFromAndTo(e: any): void {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9:]/g, '');
    if (inputValue.length === 2) {
      inputValue += ':';
    }
    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5);
    }
    if (e.inputType === 'deleteContentBackward') {
      if (inputValue.length === 3) {
        inputValue = inputValue.slice(0, 2);
      }
    }
  
    e.target.value = inputValue;
  }

  getDateFrom(e: any): void {
    this.setDateFromAndTo(e);
  }

  getDateTo(e: any): void {
    this.setDateFromAndTo(e);
  }

  addListener(day: any): void {
    this.getActiveDay(day.day);
    this.getUserEvents(day.day);

    if (day.name === 'prev') {
      this.prevMonth();
    } else if (day.name === 'next') {
      this.nextMonth();
    }
  }

  getActiveDay(date: any): void {
    const day = new Date(this.year, this.month, date);
    this.dayName = day.toString().split(' ')[0];
    this.eventDateName = date + ' ' + this.months[this.month] + ' ' + this.year;
  }

  getUserEvents(date: any): void {
    this.planService.getAllEvents().subscribe(data => {
      this.eventsArray = [];
      this.dayOfEvent = [];
      data.forEach((event) => {
        if (date === event['day'] && this.month + 1 === event['month'] && this.year === event['year']) {
          this.eventsArray.push(event as IPlan);
        }
      });
      this.dayOfEvent.push(date);
    })
  }

  createEvent(): void {
    this.eventForm.value.day = this.dayOfEvent[0];
    this.eventForm.value.month = this.month + 1;
    this.eventForm.value.year = this.year;
    const timeFrom = this.eventForm.value.eventTimeFrom;
    const timeTo = this.eventForm.value.eventTimeTo;
  
    if (timeFrom == null || timeTo == null) {
      alert('Please fill all the fields');
      return;
    }
  
    const timeFromArr = timeFrom.split(':');
    const timeToArr = timeTo.split(':');
  
    if (timeFromArr.length !== 2 || timeToArr.length !== 2) {
      alert('Invalid Time Format');
      return;
    }
  
    const [hoursFrom, minutesFrom] = timeFromArr;
    const [hoursTo, minutesTo] = timeToArr;
  
    if (isNaN(hoursFrom) || isNaN(minutesFrom) || isNaN(hoursTo) || isNaN(minutesTo) ||
        hoursFrom < 0 || hoursFrom > 23 || minutesFrom < 0 || minutesFrom > 59 ||
        hoursTo < 0 || hoursTo > 23 || minutesTo < 0 || minutesTo > 59) {
      alert('Invalid Time Format');
      return;
    }

    this.planService.createEvent(this.eventForm.value).then(() => {
      this.eventForm.reset();
      this.isEventModalOpen = false;
    });
  }

  deleteEvent(event: any): void {
    if (confirm("Are you sure you want to delete this event?")) {
      this.planService.deleteEvent(event.id).then(() => {});
    }
  }

}
