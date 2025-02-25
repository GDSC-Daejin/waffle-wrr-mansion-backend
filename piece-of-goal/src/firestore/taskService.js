import { db } from "../config/firebaseConfig";
import { collection, doc, addDoc } from "firebase/firestore";

// 특정 유저의 tasks 하위 컬렉션에 작업 추가
export async function addTask(userId, taskContent) {
  if (!userId) return;

  const tasksRef = collection(doc(db, "users", userId), "tasks");
  await addDoc(tasksRef, {
    content: taskContent,
    isCompleted: false,
  });
}
