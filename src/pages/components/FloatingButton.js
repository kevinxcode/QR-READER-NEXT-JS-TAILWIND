// FloatingButton.js
import React from "react";

const FloatingButton = () => {
  return (
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 mb-4">
      <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    Home
     </a>
     <a href="qr-reader" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    QR-Reader
     </a>
    </div>

  );
};

export default FloatingButton;

