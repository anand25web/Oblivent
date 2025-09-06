import { initializeApp, FirebaseApp } from 'firebase/app';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Firebase app instance (initialized later)
let firebaseApp: FirebaseApp | null = null;

/**
 * Initialize Firebase with the provided config.
 * If already initialized, returns the existing app.
 */
export function initializeFirebase(config: FirebaseConfig): FirebaseApp {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    console.log('Firebase initialized with config:', config);
  }
  return firebaseApp;
}

export { firebaseApp };