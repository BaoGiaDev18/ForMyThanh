function showMessage() {
  // Hiện thông báo đầu tiên
  document.getElementById("message").textContent = "Cảm ơn bạn đã tha thứ!";

  // Hiện thông báo bổ sung sau đó
  setTimeout(() => {
    document.getElementById("additionalMessage").style.display = "block";
  }, 1000); // Hiện thông báo mới sau 1 giây
}

function moveButton(button) {
  let attempts = 100; // Số lần thử để đảm bảo nút không bị trúng
  let moved = false;

  while (attempts > 0 && !moved) {
    // Lấy kích thước của container
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect(); // Lấy vị trí và kích thước của container
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Lấy kích thước của nút
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Đặt giới hạn cho vị trí di chuyển trong container
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    // Tạo vị trí ngẫu nhiên trong giới hạn
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Kiểm tra khoảng cách mới với vị trí con trỏ chuột
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Tính toán vị trí của nút so với màn hình
    const buttonX = containerRect.left + newX;
    const buttonY = containerRect.top + newY;

    const distanceX = Math.abs(mouseX - (buttonX + buttonWidth / 2));
    const distanceY = Math.abs(mouseY - (buttonY + buttonHeight / 2));

    // Nếu khoảng cách đủ xa, chuyển nút đến vị trí mới
    if (distanceX > 50 && distanceY > 50) {
      // Đảm bảo nút không bị di chuyển ra ngoài container
      button.style.transform = `translate(${newX}px, ${newY}px)`;
      moved = true;
    }

    attempts--;
  }
}
