import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IExerciseResponse } from '../../../shared/interfaces/exercise/exercise.interface';
import { UserExerciseService } from '../../../shared/services/user-exercise/user-exercise.service';

@Component({
  selector: 'app-exercise-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exercise-info.component.html',
  styleUrl: './exercise-info.component.scss'
})
export class ExerciseInfoComponent implements OnInit, OnDestroy {

  public exercise!: IExerciseResponse;
  public isStartTimerClicked = false;
  private timerID: any;
  public time!: string;
  public remainingTime!: number;
  public displayTime!: string;
  // public countOfCompletedExercises = 0;
  
  constructor(
    private userExerciseService: UserExerciseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.getOneExercise();
  }
  
  ngOnDestroy(): void {
    this.stopTimer();
  }
    
  getOneExercise(): void {
    const EXERCISE_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.userExerciseService.getOneUserExercise(EXERCISE_ID as string).subscribe(data => {
      this.exercise = data as IExerciseResponse;
      this.time = this.exercise.duration;
      this.displayTime = this.exercise.duration;
      this.remainingTime = +this.time.slice(1, 2) * 60 + +this.time.slice(3, 5);
    })
  }

  startTimer(): void {
    this.isStartTimerClicked = !this.isStartTimerClicked;
    if (!this.exercise) {
      return;
    }
  
    this.timerID = setInterval(() => {
      const minutes = Math.floor(this.remainingTime / 60);
      const seconds = this.remainingTime % 60;
      this.displayTime = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
  
      this.remainingTime--;

      if (this.remainingTime <= 0) {
        clearInterval(this.timerID);
        this.displayTime = '00:00';
      }
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
  
  resetTimer(): void {
    clearInterval(this.timerID);
    this.displayTime = this.exercise.duration;
    this.remainingTime = +this.time.slice(1, 2) * 60 + +this.time.slice(3, 5);
  }
  
  stopTimer(): void {
    clearInterval(this.timerID);
  }

  completeExercise(exercise: IExerciseResponse): void {
    if (this.displayTime == '00:00') {
      // this.userExerciseService.setCompletedExercise(exercise);
      // this.userExerciseService.deleteExerciseFromUserList(exercise.id as string);
      this.router.navigate(['/exercise']);
      exercise.completed = true;
      this.userExerciseService.updateUserExercise(exercise, exercise.id as string).then(() => {
      })
      // this.countOfCompletedExercises++;
      // this.schedulerDateService.getAllSchedulerDays().subscribe(data => {
      //   data.forEach((el) => {
      //     if (this.userExerciseService.todaysDate === el['date']) {
      //       el['countOfCompletedExercise'] = this.countOfCompletedExercises;
      //       this.schedulerDateService.updateSchedulerDay(el as IDayData, el.id);
      //     }
      //   })
      // })
      // this.userExerciseService.countOfCompletedExercise++;
      // console.log(this.userExerciseService.countOfCompletedExercise);
    }
  }

}
