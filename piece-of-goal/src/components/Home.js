// Home.js
import React, { useState } from "react";
import { handleGoogleLogin } from "../components/Sign"; // 로그인 기능 import
import { useNavigate } from "react-router-dom"; // useNavigate import
import "../styles/Home.css"; 

function Home() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // navigate hook 사용

  // 로그인 후 Monthly 페이지로 이동
  const handleLogin = () => {
    handleGoogleLogin(setUserData, navigate); // navigate를 handleGoogleLogin에 전달
  };

  return (
    <div className="home-container">
      <img src="/assets/poc.web_logo-01.png" alt="PoG_logo" className="logo" />
      <h1 className="description">하나씩 해내다 보면 목표 달성은 식은 죽 먹기!</h1>

      {/* 로그인 버튼 → 로그인하면 이름으로 변경 */}
      <button className="login-button" onClick={!userData ? handleLogin : null}>
        {userData ? userData.displayName : "로그인"}
      </button>
    </div>
  );
}

export default Home;
