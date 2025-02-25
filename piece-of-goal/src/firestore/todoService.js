import { db } from "../config/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * 특정 사용자의 `todos` 하위 컬렉션에 할 일 추가
 */
export async function addTodo(userId, todoData) {
  if (!userId) return;

  const todosRef = collection(db, "users", userId, "todos");
  await addDoc(todosRef, {
    ...todoData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}
