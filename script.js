function showMessage() {
  document.getElementById("message").textContent = "Cảm ơn bạn đã tha thứ!";
}

function moveButton(button) {
  let attempts = 100; // Số lần thử để đảm bảo nút không bị trúng
  let moved = false;

  while (attempts > 0 && !moved) {
    // Lấy kích thước màn hình
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Đặt giới hạn cho vị trí di chuyển trong màn hình
    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;

    // Tạo vị trí ngẫu nhiên trong giới hạn
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Kiểm tra khoảng cách mới với vị trí con trỏ chuột
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = Math.abs(mouseX - (newX + buttonWidth / 2));
    const distanceY = Math.abs(mouseY - (newY + buttonHeight / 2));

    // Nếu khoảng cách đủ xa, chuyển nút đến vị trí mới
    if (distanceX > 50 && distanceY > 50) {
      // 50 là khoảng cách tối thiểu
      button.style.transform = `translate(${newX}px, ${newY}px)`;
      moved = true;
    }

    attempts--;
  }
}
