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

  // Tạo vị trí ngẫu nhiên trong giới hạn của container
  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  // Đảm bảo nút không bị di chuyển ra ngoài container
  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;

  // Đặt vị trí mới cho nút bằng cách sử dụng left và top, dựa trên vị trí của container
  button.style.position = "absolute"; // Sử dụng position absolute để di chuyển tự do
  button.style.left = `${newX}px`; // Đặt vị trí ngang
  button.style.top = `${newY}px`; // Đặt vị trí dọc
}
