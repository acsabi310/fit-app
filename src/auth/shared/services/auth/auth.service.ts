import { Injectable } from "@angular/core";

import { Store } from "store";

import "rxjs/add/operator/do";

import { AngularFireAuth } from "angularfire2/auth";

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  auth$ = this.af.authState.do(next => {
    if (!next) {
      this.store.set("user", null);
      return;
    }
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: true
    };
    this.store.set("user", user);
  });

  constructor(private af: AngularFireAuth, private store: Store) {}

  createUser(email: string, pw: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, pw);
  }

  loginUser(email: string, pw: string) {
    return this.af.auth.signInWithEmailAndPassword(email, pw);
  }

  logoutUser() {
    return this.af.auth.signOut();
  }

  get authState() {
    return this.af.authState;
  }

  get user() {
    return this.af.auth.currentUser;
  }
}
