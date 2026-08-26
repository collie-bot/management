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

// 푸시 알림 클릭 시 실행
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // 이미 열려있는 앱 탭이 있다면 포커스
      for (let i = 0; i < clientList.length; i++) {
        let client = clientList[i];
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      // 열려있는 탭이 없다면 새 창으로 열기
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});