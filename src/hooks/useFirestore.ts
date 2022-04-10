import { useCallback } from 'react';
import {
  query,
  orderBy,
  getDocs,
  collection,
  limit,
  addDoc,
  DocumentData,
} from 'firebase/firestore';
import firestore from '../firebaseInit';
import store from '../utils/store';

// firestore
export const USERS_COLLECTION = 'users';

// field
export const USER_NAME = 'userName';
export interface UsersRecordProps {
  userName: string;
  round: number;
  point: number;
  time: Date;
}

export interface FirestoreHookProps {
  addRecordInStore: (round: number, point: number) => void;
  getRecordsInStore: () => Promise<UsersRecordProps[] | DocumentData[]>;
}

function useFirestore(): FirestoreHookProps {
  const usersRef = collection(firestore, USERS_COLLECTION);

  const addRecordInStore = useCallback(
    async (round: number, point: number) => {
      try {
        await addDoc(usersRef, {
          userName: store.getSessionStorage(USER_NAME),
          round,
          point,
          time: new Date(),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error adding document: ', e);
      }
    },
    [usersRef]
  );

  const getRecordsInStore = useCallback(async (): Promise<UsersRecordProps[] | DocumentData[]> => {
    const querySnapshot = query(
      usersRef,
      orderBy('round', 'desc'),
      orderBy('point', 'desc'),
      limit(30)
    );
    const documentSnapshots = await getDocs(querySnapshot);
    return documentSnapshots.docs.map((doc) => doc.data());
  }, [usersRef]);

  return { addRecordInStore, getRecordsInStore };
}

export default useFirestore;
