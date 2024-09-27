function showMessage() {
  // Hiện thông báo đầu tiên
  document.getElementById("message").textContent = "Cảm ơn bạn đã tha thứ!";

  // Hiện thông báo bổ sung sau đó
  setTimeout(() => {
    document.getElementById("additionalMessage").style.display = "block";
  }, 1000); // Hiện thông báo mới sau 1 giây
}

function moveButton(button) {
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

  // Đảm bảo nút không bị di chuyển ra ngoài container
  button.style.transform = `translate(${newX}px, ${newY}px)`;
}
