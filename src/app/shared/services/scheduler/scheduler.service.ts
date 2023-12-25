import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { DocumentData, DocumentReference, collection } from '@firebase/firestore';
import { IDayData } from '../../interfaces/scheduler-date/scheduler-date.interface';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  public scheduleCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore
  ) {
    this.scheduleCollection = collection(this.afs, 'schedule');
  }

  ngOnInit(): void {
  }

  getAllScheduleDays() {
    return collectionData(this.scheduleCollection, { idField: 'id' });
  }

  getOneScheduleDay(id: string) {
    const scheduleDocumentReference = doc(this.afs, `schedule/${id}`);
    return docData(scheduleDocumentReference, { idField: 'id' });
  }

  setScheduleDay(userExercise: IDayData) {
    return addDoc(this.scheduleCollection, userExercise);
  }

  updateScheduleDay(exercise: IDayData, id: string) {
    const scheduleDocumentReference = doc(this.afs, `schedule/${id}`);
    return updateDoc(scheduleDocumentReference, { ...exercise });
  }

  deleteScheduleDay(id: string) {
    const scheduleDocumentReference = doc(this.afs, `schedule/${id}`);
    return deleteDoc(scheduleDocumentReference);
  }

}
