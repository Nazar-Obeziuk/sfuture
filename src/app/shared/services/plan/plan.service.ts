import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { DocumentData, collection } from '@firebase/firestore';
import { IPlan } from '../../interfaces/plan/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  public planCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore
  ) { 
    this.planCollection = collection(this.afs, 'planEvents');
  }

  getAllEvents() {
    return collectionData(this.planCollection, { idField: 'id' });
  }

  // getOneExercise(id: string) {
  //   const planDocumentReference = doc(this.afs, `planEvents/${id}`);
  //   return docData(planDocumentReference, { idField: 'id' });
  // }

  createEvent(planItem: IPlan) {
    return addDoc(this.planCollection, planItem);
  }

  updateEvent(planItem: IPlan, id: string) {
    const planDocumentReference = doc(this.afs, `planEvents/${id}`);
    return updateDoc(planDocumentReference, { ...planItem });
  }

  deleteEvent(id: string) {
    const planDocumentReference = doc(this.afs, `planEvents/${id}`);
    return deleteDoc(planDocumentReference);
  }

}
