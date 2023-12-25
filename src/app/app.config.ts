import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sfuture-1638e","appId":"1:512947895647:web:d8c9a535be8b94a3654aea","storageBucket":"sfuture-1638e.appspot.com","apiKey":"AIzaSyAhOHwBRB_I5SFKXKkge-g91HAZixOQ74o","authDomain":"sfuture-1638e.firebaseapp.com","messagingSenderId":"512947895647"}))), 
    importProvidersFrom(provideStorage(() => getStorage())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    ToastrModule
  ],
};
