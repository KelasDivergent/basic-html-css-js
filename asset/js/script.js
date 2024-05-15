document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan event listener ke tombol notifikasi berhasil
    document.getElementById('successButton').addEventListener('click', showSuccessNotification);
  
    // Menambahkan event listener ke tombol notifikasi gagal
    document.getElementById('failureButton').addEventListener('click', showFailureNotification);
  });
  
  function showSuccessNotification() {
    // Memeriksa apakah browser mendukung Notification API
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Memeriksa apakah izin notifikasi sudah diberikan
    else if (Notification.permission === "granted") {
      // Menampilkan notifikasi berhasil
      var notification = new Notification("Successful Notification", { icon: 'success-icon.png' });
    }
  
    // Jika izin belum diberikan, meminta izin
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // Jika izin diberikan, menampilkan notifikasi berhasil
        if (permission === "granted") {
          var notification = new Notification("Successful Notification", { icon: 'success-icon.png' });
        }
      });
    }
  }
  
  function showFailureNotification() {
    // Memeriksa apakah browser mendukung Notification API
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Menampilkan notifikasi gagal
    var notification = new Notification("Failed Notification", { icon: 'failure-icon.png' });
  }
  