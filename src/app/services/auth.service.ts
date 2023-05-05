import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afs: AngularFireAuth) {}

  signInWithGoogle() {
    return this.afs.signInWithPopup(new GoogleAuthProvider());
  }

  registerWithEmailAndPassword(user: { email: string; password: string }) {
    return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  }
  signInWithEmailAndPassword(user: Partial<{ email: string | null;  password: string | null }>) {
    return this.afs.signInWithEmailAndPassword(user.email!, user.password!);
  }

  isLoggedIn(): boolean {
    return !!this.afs.authState;
  }

  isLoggedOut(): void {
    // Logout the user
  }


}
