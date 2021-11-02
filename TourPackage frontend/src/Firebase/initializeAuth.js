import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

const initializeFirebaseApp = () => {
    initializeApp(firebaseConfig);
};
export default initializeFirebaseApp;
