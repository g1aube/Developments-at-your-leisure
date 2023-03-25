const result = document.querySelector(".result");
const click_button = document.querySelector(".click-me");
let count = 0;

click_button.addEventListener('click', () => {
    count++;
    result.textContent = count;
});