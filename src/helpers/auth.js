import { database, firebaseAuth } from "../config/database";

export function createUser(email, pw) {
	return firebaseAuth().createUserWithEmailAndPassword(email, pw);
}

export function logout() {
	return firebaseAuth().signOut();
}

export function login(email, pw) {
	return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
	return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
	return database.ref(`users/${user.uid}`)
		.set({
			email: user.email,
			uid: user.uid
		})
}
