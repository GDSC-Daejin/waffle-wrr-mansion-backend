import { auth } from "../config/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserIfNotExists } from "../firestore/userService"; // userService에서 사용자 데이터 저장 함수 가져오기

export function handleGoogleLogin(setUserData, navigate) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => {
      const user = data.user;
      setUserData(user);
      console.log(user);

      // ✅ Firestore에 사용자 데이터 저장
      createUserIfNotExists(user);

      // ✅ 로그인 후 Monthly 페이지로 이동
      navigate('/monthly');
    })
    .catch((err) => {
      console.log(err);
    });
}
