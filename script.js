const modalButton = document.getElementById("js-button");
const modal = document.getElementById("js-modal");
const closeButton = document.getElementsByClassName("p-modal__content__close")[0];

// モーダルを開く関数
function openModal() {
  modal.style.display = "block";
}

// モーダルを閉じる関数
function closeModal() {
  modal.style.display = "none";
}

// ボタンクリックでモーダルを開くイベントリスナーの設定
modalButton.addEventListener("click", openModal);

// 閉じるボタンクリックでモーダルを閉じるイベントリスナーの設定
closeButton.addEventListener("click", closeModal);