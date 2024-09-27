function showMessage() {
  // Hiện thông báo đầu tiên
  document.getElementById("message").textContent =
    "Âu kay ảnh đã được tha thứ :)))))";

  // Hiện thông báo bổ sung sau đó
  setTimeout(() => {
    document.getElementById("additionalMessage").style.display = "block";
  }, 1000); // Hiện thông báo mới sau 1 giây
}

function moveButton(button) {
  // Lấy kích thước của body (toàn bộ màn hình hiển thị)
  const body = document.body;
  const bodyRect = body.getBoundingClientRect(); // Lấy vị trí và kích thước của body
  const bodyWidth = bodyRect.width;
  const bodyHeight = bodyRect.height;

  // Lấy kích thước của nút
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Đặt giới hạn cho vị trí di chuyển trong toàn bộ body (toàn bộ màn hình)
  const maxX = bodyWidth - buttonWidth;
  const maxY = bodyHeight - buttonHeight;

  // Tạo vị trí ngẫu nhiên trong giới hạn của body
  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  // Đảm bảo nút không bị di chuyển ra ngoài màn hình
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;

  // Đặt vị trí mới cho nút bằng cách sử dụng left và top
  button.style.position = "absolute"; // Sử dụng position absolute để di chuyển tự do
  button.style.left = `${newX}px`; // Đặt vị trí ngang
  button.style.top = `${newY}px`; // Đặt vị trí dọc
}
