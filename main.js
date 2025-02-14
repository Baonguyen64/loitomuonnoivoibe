// Thay đổi nội dung búc thư ở đây
var letterContent =
  " Hôm nay là Valentine, nhưng với tớ, mỗi ngày có cậu đều đặc biệt. Cậu là ánh sáng dịu dàng trong cuộc sống của tớ, là lý do khiến tớ luôn muốn trở thành phiên bản tốt hơn của chính mình.Tớ không biết tương lai sẽ ra sao, nhưng ngay lúc này, tớ chỉ muốn nói rằng: Tớ thích Cậu. Thích nụ cười ấy, ánh mắt ấy, và cả những khoảnh khắc nhỏ bé nhưng ý nghĩa bên cậu.Chúc cậu một ngày Valentine tràn đầy niềm vui và hạnh phúc. Dù thế nào, tớ vẫn sẽ luôn ở đây, âm thầm quan tâm và mong những điều tốt đẹp nhất đến với cậu.❤️";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
