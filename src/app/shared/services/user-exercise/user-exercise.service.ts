import { Injectable, OnInit } from '@angular/core';
import { IExerciseRequest, IExerciseResponse } from '../../interfaces/exercise/exercise.interface';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { DocumentData, DocumentReference, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserExerciseService implements OnInit {

  // public allUserExerciseCollection!: CollectionReference<DocumentData>;
  public userExerciseCollection!: CollectionReference<DocumentData>;
  // public userCompletedExerciseCollection!: CollectionReference<DocumentData>;
  // public todaysDate!: string;
  // public countOfProcessedExercise: number = 0;
  // public countOfCompletedExercise: number = 0;

  constructor(
    private afs: Firestore
  ) {
    // this.allUserExerciseCollection = collection(this.afs, 'allUserExercises');
    this.userExerciseCollection = collection(this.afs, 'userExercises');
    // this.userCompletedExerciseCollection = collection(this.afs, 'userExercisesCompleted');

    // const today = new Date();
    // const tomorrow = new Date(today);
    // tomorrow.setDate(today.getDate());
    // this.todaysDate = tomorrow.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }

  ngOnInit(): void {
    
  }
  
  // --------------- Process Exercise --------------------

  // addUserExercise(userExercise: IExerciseResponse) {
  //   const addToUserExercise = addDoc(this.userExerciseCollection, userExercise);
  //   const addToAllUserExercises = addDoc(this.allUserExerciseCollection, userExercise);
  //   return Promise.all([addToUserExercise, addToAllUserExercises]);
  // }

  getAllUserExercise() {
    return collectionData(this.userExerciseCollection, { idField: 'id' });
  }

  getOneUserExercise(id: string) {
    const exerciseDocumentReference = doc(this.afs, `userExercises/${id}`);
    return docData(exerciseDocumentReference, { idField: 'id' });
  }

  setUserExercise(userExercise: IExerciseResponse) {
    return addDoc(this.userExerciseCollection, userExercise);
  }

  updateUserExercise(exercise: IExerciseRequest, id: string) {
    const exerciseDocumentReference = doc(this.afs, `userExercises/${id}`);
    return updateDoc(exerciseDocumentReference, { ...exercise });
  }

  deleteUserExercise(id: string) {
    const exerciseDocumentReference = doc(this.afs, `userExercises/${id}`);
    return deleteDoc(exerciseDocumentReference);
  }


  
  // --------------- Completed Exercise --------------------

  // getAllCompletedExercise() {
  //   return collectionData(this.userCompletedExerciseCollection, { idField: 'id' });
  // }

  // setCompletedExercise(userExerciseCompleted: IExerciseResponse) {
  //   return addDoc(this.userCompletedExerciseCollection, userExerciseCompleted);
  // }

  // // ----------------- All Exercise ------------------------

  // getAllExercise() {
  //   return collectionData(this.allUserExerciseCollection, { idField: 'id' });
  // }

}

