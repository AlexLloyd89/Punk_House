import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("email");
      // provider.addScope("profile");
      this.afAuth.signInWithPopup(provider).then(res => {
        resolve(res);
      });
    });
  }

  signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed up!", res);
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }
}
