// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCNiAEn7XnA0_GbszPlfI1ZlWkrmEEyWe8",
  authDomain: "management-2974b.firebaseapp.com",
  projectId: "management-2974b",
  storageBucket: "management-2974b.firebasestorage.app",
  messagingSenderId: "647364493273",
  appId: "1:647364493273:web:af5592bca986bc59e6a3c8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // 필요시 아이콘 경로 지정
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});