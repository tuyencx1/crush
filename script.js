const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Anh Vẫn Yêu Em Nhiều Lắm Nha !!"
    "https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});