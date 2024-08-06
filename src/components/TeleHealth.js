import React from 'react';
import './FullScreenImage.css';
import TeleHealth_img1 from "../img/TeleHealth_img1.png"
import TeleHealth_img2 from "../img/TeleHealth_img2.png"

// TeleHealth 컴포넌트 정의
export default function TeleHealth() {
  // 이미지 클릭 시 이동할 링크 URL

  return (
    <div className="fullscreen-container">
      {/* 이미지 클릭 시 linkURL로 이동 */}
        <img
          src={TeleHealth_img1} // 이미지 URL
          alt="TeleHealth"
          className="fullscreen-image1" // CSS 클래스 추가.
          onClick={() => window.open('https://console.dialogflow.com/api-client/demo/embedded/359291b7-497e-4037-9d93-1080a5d3b03c', 'window_name', 'width=600, height=700, location=no, status=no, scrollbars=yes')}
        />

        <img
          src={TeleHealth_img2} // 이미지 URL
          alt="TeleHealth"
          className="fullscreen-image2" // CSS 클래스 추가.
          onClick={() => window.open('https://console.dialogflow.com/api-client/demo/embedded/359291b7-497e-4037-9d93-1080a5d3b03c', 'window_name', 'width=600, height=700, location=no, status=no, scrollbars=yes')}
        />
    </div>
  );
}