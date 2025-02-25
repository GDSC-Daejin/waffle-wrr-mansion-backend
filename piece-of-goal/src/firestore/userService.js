import { db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

/**
 * 사용자가 로그인하면 Firestore에 기본 정보 저장
 */
export async function createUserIfNotExists(user) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    name: user.displayName || "Unknown",
    email: user.email || "",
  }, { merge: true }); // 기존 데이터 유지
}
