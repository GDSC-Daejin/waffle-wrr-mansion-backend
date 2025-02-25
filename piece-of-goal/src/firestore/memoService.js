import { db } from "../config/firebaseConfig";
import { collection, doc, addDoc } from "firebase/firestore";

// 특정 유저의 memos 하위 컬렉션에 메모 추가
export async function addMemo(userId, memoContent) {
  if (!userId) return;

  const memosRef = collection(doc(db, "users", userId), "memos");
  await addDoc(memosRef, {
    content: memoContent,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: userId,
  });
}
