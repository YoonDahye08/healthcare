import React from 'react';
import './FullScreenImage.css';

// TeleHealth 컴포넌트 정의
export default function TeleHealth() {
  // 이미지 클릭 시 이동할 링크 URL
  const linkURL =
    'https://console.dialogflow.com/api-client/demo/embedded/359291b7-497e-4037-9d93-1080a5d3b03c'; // 원하는 URL로 변경하세요

  return (
    <div className="fullscreen-container">
      {/* 이미지 클릭 시 linkURL로 이동 */}
      <a href={linkURL} target="_blank" rel="noopener noreferrer">
        <img
          src="https://ifh.cc/g/rPpW9z.jpg" // 이미지 URL
          alt="TeleHealth"
          className="fullscreen-image" // CSS 클래스 추가
        />
      </a>
    </div>
  );
}
