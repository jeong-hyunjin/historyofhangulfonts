let menu1 = document.querySelector('#menu1');
let submenu = document.querySelector('#submenu');

menu1.addEventListener('mouseover', () => {
    submenu.classList.toggle('show');
});

submenu.addEventListener('mouseover', () => {
    submenu.classList.toggle('show');
})

menu1.addEventListener('mouseout', () => {
    submenu.classList.toggle('show');
});

submenu.addEventListener('remove', () => {
    submenu.classList.toggle('show');
})


