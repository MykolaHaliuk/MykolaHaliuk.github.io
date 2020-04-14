const cartButton = document.querySelector("#shoping-card");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");
cartButton.addEventListener('click', function(event){
    modal.classList.add("modal__open");
});

close.addEventListener('click', function(event){
    modal.classList.remove("modal__open");
});

