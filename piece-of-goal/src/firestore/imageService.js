import { db } from "../config/firebaseConfig";
import { collection, doc, addDoc } from "firebase/firestore";

// 특정 유저의 images 하위 컬렉션에 이미지 정보 추가
export async function addImage(userId, imageUrl) {
  if (!userId) return;

  const imagesRef = collection(doc(db, "users", userId), "images");
  await addDoc(imagesRef, {
    imageUrl: imageUrl,
    uploadedAt: new Date(),
    userId: userId,
  });
}
