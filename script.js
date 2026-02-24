function openLetter() {
  document.querySelector(".page-1").classList.remove("active");
  document.querySelector(".page-2").classList.add("active");
}

function flipTicket() {
  document.getElementById("ticketInner").classList.add("flipped");

  setTimeout(() => {
    document.querySelector(".page-3").classList.add("active");
  }, 600);
}