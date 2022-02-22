const noticeCloseBtn = document.querySelector(".notice__btn__close");
const noticeContainer = document.querySelector(".notice__container");
const noticeNoShowBtn = document.querySelector(".notice__btn__noshow");

cookiedata = document.cookie;
if ( cookiedata.indexOf("notice=done") < 0 ) {
  noticeContainer.style.display = "";
}
else {
  noticeContainer.style.display = "none";
}
  

function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  document.cookie = `${cookie_name}=${value}`;
  exdate.setDate(exdate.getDate() + days);
}

function noticeHide() {
  noticeContainer.style.display = "none";
}

function noticeNoShow() {
  setCookie("notice", "done", 3);
  noticeHide();
}

noticeCloseBtn.addEventListener("click", noticeHide);
noticeNoShowBtn.addEventListener("click", noticeNoShow);