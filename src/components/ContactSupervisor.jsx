import React, { useState } from 'react';

export default function ContactSupervisor() {
   const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
const handleSend = () => {
    if (!phone || !message) {
      alert('الرجاء إدخال الرقم والرسالة');
      return;
    }

    // إزالة الرموز الزائدة من الرقم (مثل "+" أو "-")
    const cleanedPhone = phone.replace(/[^0-9]/g, '');

    // ترميز الرسالة لتصبح صالحة داخل الرابط
    const encodedMessage = encodeURIComponent(message);

    // بناء الرابط
    const url = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;

    // فتح الرابط
    window.open(url, '_blank');
  };

  return (
    <div className="p-4 space-y-3 max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center">  ارسل رسالتك عبر تطبيق الواتساب </h2>
      <input
        type="text"
        placeholder="أدخل رقم الهاتف "
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full rounded text-right"
      />
      <textarea
        placeholder="اكتب الرسالة هنا"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full rounded text-right"
      />
      <button
        onClick={handleSend}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        إرسال على واتساب
      </button>
    </div>
  );
}