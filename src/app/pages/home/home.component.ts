import { Component, OnDestroy } from '@angular/core';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { IExerciseResponse } from '../../shared/interfaces/exercise/exercise.interface';
import { ExerciseService } from '../../shared/services/exercise/exercise.service';
import { SlicePipe } from '../../shared/pipes/slice/slice.pipe';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ICategoryResponse } from '../../shared/interfaces/category/category.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserExerciseService } from '../../shared/services/user-exercise/user-exercise.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScheduleComponent, SlicePipe, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {

  public userExercises: IExerciseResponse[] = [];
  public userAllCategories: ICategoryResponse[] = [];
  // public userAddedExercise: IDayData[] = [];
  public eventSubscription!: Subscription;
  // public countOfAddedExercise = 0;
  // private previousCountOfProcessedExercise: number = 0;

  constructor(
    private exerciseService: ExerciseService,
    private categoryService: CategoryService,
    private userExerciseService: UserExerciseService,
    private router: Router
  ) {
    this.eventSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getAllUserExercise();
        this.getAllUserCategories();
      }
    })
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  getAllUserExercise(): void {
    this.exerciseService.getAllExercises().subscribe(data => {
      this.userExercises = data as IExerciseResponse[];
    })
  }

  getAllUserCategories(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.userAllCategories = data as ICategoryResponse[];
    })
  }

  onCategoryChange(event: any): void {
    const selectedCategory = event.target.value;
    if (selectedCategory === 'ALL') {
      this.exerciseService.getAllExercises().subscribe(data => {
        this.userExercises = data as IExerciseResponse[];
      })
    } else {
      this.exerciseService.getAllExercisesByCategory(selectedCategory).subscribe(data => {
        this.userExercises = data as IExerciseResponse[];
      })
    }
  }

  addExerciseToUser(exercise: IExerciseResponse): void {
    this.userExerciseService.setUserExercise(exercise).then(() => {})
    // this.countOfAddedExercise++;

    // this.schedulerDateService.getAllSchedulerDays().subscribe(data => {
    //   this.userAddedExercise = data as IDayData[];
    //   this.getUserCountOfProcessed();
    // });
  }
  
  // getUserCountOfProcessed(): void {
  //   this.userAddedExercise.forEach((el) => {
  //     if (this.userExerciseService.todaysDate === el.date) {
  //       const newCountOfProcessedExercise = this.countOfAddedExercise;
        
  //       if (newCountOfProcessedExercise !== this.previousCountOfProcessedExercise) {
  //         el.countOfProcessedExercise = newCountOfProcessedExercise;
  //         console.log(el.countOfProcessedExercise);
  
  //         this.schedulerDateService.updateSchedulerDay(el, el.id as string).then(() => {
  //           this.previousCountOfProcessedExercise = newCountOfProcessedExercise;
  //         });
  //       }
  //     }
  //   });
  // }

  
}
