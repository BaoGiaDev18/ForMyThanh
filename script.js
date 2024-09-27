function showMessage() {
  // Hiện thông báo đầu tiên
  document.getElementById("message").textContent = "Cảm ơn bạn đã tha thứ!";

  // Hiện thông báo bổ sung sau đó
  setTimeout(() => {
    document.getElementById("additionalMessage").style.display = "block";
  }, 1000); // Hiện thông báo mới sau 1 giây
}

function moveButton(button) {
  // Lấy kích thước của cửa sổ trình duyệt (viewport)
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Lấy kích thước của nút
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Đặt giới hạn cho vị trí di chuyển trong toàn bộ cửa sổ (viewport)
  const maxX = windowWidth - buttonWidth;
  const maxY = windowHeight - buttonHeight;

  // Tạo vị trí ngẫu nhiên trong giới hạn của cửa sổ
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  // Đảm bảo nút không bị di chuyển ra ngoài cửa sổ (viewport)
  button.style.transform = `translate(${newX}px, ${newY}px)`;
}
