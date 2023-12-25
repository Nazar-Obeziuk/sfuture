import { Component, OnInit } from '@angular/core';
import { IExerciseResponse } from '../../shared/interfaces/exercise/exercise.interface';
import { UserExerciseService } from '../../shared/services/user-exercise/user-exercise.service';
import { SlicePipe } from '../../shared/pipes/slice/slice.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent implements OnInit {
  
  public userExerciseList: IExerciseResponse[] = [];
  public userCompletedExerciseList: IExerciseResponse[] = [];
  public isCompletedExercise = false;
  public todaysDate!: string;

  constructor(
    private userExerciseService: UserExerciseService,
  ) {
    const currentDate = new Date();
    const today = new Date(currentDate);
    today.setDate(currentDate.getDate());
    this.todaysDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }

  ngOnInit(): void {
    this.getUserExercises();
    this.getUserCompletedExercises();
    this.startDailyDataCleanupTimer();
  }
  
  getUserExercises(): void {
    this.userExerciseService.getAllUserExercise().subscribe(data => {
      const userExerciseData = data as IExerciseResponse[];
      this.userExerciseList = userExerciseData.filter((exercise) => exercise.completed === false);
    });
  }

  getUserCompletedExercises(): void {
    this.userExerciseService.getAllUserExercise().subscribe(data => {
      const userExerciseData = data as IExerciseResponse[];
      this.userCompletedExerciseList = userExerciseData.filter((exercise) => exercise.completed === true);
    });
  }

  deleteUserExercise(userExercise: IExerciseResponse): void {
    this.userExerciseService.deleteUserExercise(userExercise.id as string).then(() => {
      this.getUserExercises();
    });
  }

  startDailyDataCleanupTimer() {
    // const now = new Date();
    // const tomorrow = new Date(now);
    // tomorrow.setDate(now.getDate() + 1);
    // tomorrow.setHours(0, 0, 0, 0);
    
    // const timeUntilTomorrow = tomorrow.getTime() - now.getTime();
  
    // setTimeout(() => {
    //   this.cleanupData();
    //   this.startDailyDataCleanupTimer();
    // }, timeUntilTomorrow);
    const targetHour = 24;

    const now = new Date();
    const currentHour = now.getHours();

    let timeDiff = targetHour - currentHour;

    if (timeDiff < 0) {
      timeDiff += 24;
    }
    
    setTimeout(() => {
      this.cleanUpAllExercise();
      this.startDailyDataCleanupTimer();
    }, timeDiff * 60 * 60 * 1000);
  }

  cleanUpAllExercise() {
    this.userExerciseService.getAllUserExercise().subscribe(data => {
      if (data.length >= 1) {
        data.map((exercise) => {
          this.userExerciseService.deleteUserExercise(exercise.id as string).then(() => {});
        })
      }
    })
  }

  toggleProcessExercises(): void {
    this.isCompletedExercise = false;
  }

  toggleCompletedExercises(): void {
    this.isCompletedExercise = true;
  }

}
