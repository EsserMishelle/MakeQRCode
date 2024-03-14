// In MakeQRCode.jsx
import { useState } from "react";
import QRCode from "react-qr-code";

export default function MakeQRCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleMakeQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1 style={{ justifyContent: "center" }}>Make QR Code</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Enter a name or URL"
      />

      <button disabled={!input.trim()} onClick={handleMakeQrCode}>
        Make QR Code
      </button>
      <br />
      <br />
      {qrCode && <QRCode value={qrCode} size={400} bgColor="#fff" />}
    </div>
  );
}
