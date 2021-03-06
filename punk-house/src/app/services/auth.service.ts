import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Injectable } from "@angular/core";
import { resolve } from "url";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  doGoogleLogin() {
    // return new Promise<any>((resolve, reject) => {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   provider.addScope("email");
    //   provider.addScope("profile");
    //   this.afAuth.signInWithPopup(provider).then(res => {
    //     resolve(res);
    //   });
    // });
  }

  signUp(email, password) {
    try {
      return new Promise<any>((res, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          res => {
            console.log(res);
          },
          err => reject(err)
        );
      });
    } catch (e) {
      console.log(e);
    }
  }
}
