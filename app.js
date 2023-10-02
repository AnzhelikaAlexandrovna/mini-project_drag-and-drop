const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);  // Функция вызывается, когда элемент, который мы перетаскиваем, находится непосредственно над placeholder-ом
    placeholder.addEventListener('dragenter', dragenter);  // Когда мы заходим на территорию конкретного placeholder-а
    placeholder.addEventListener('dragleave', dragleave);   // Когда перенесли на территорию и вышли оттуда
    placeholder.addEventListener('drop', dragdrop);    // Когда отпустили элемент перетащив его 
} 

function dragstart(event) {
    event.target.innerText = 'Отпусти! Щекотно)';
    event.target.classList.add('hold', 'progress');
    event.target.classList.remove('done');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.innerText = 'Спасибо)';
    event.target.classList.remove('hold', 'hide', 'progress');
    event.target.classList.add('done');
}

function dragover (event) {
    event.preventDefault();
    console.log('drag over');
}

function dragenter (event) {
    event.target.classList.add('hovered');
    console.log('drag enter');
}

function dragleave (event) {
    event.target.classList.remove('hovered');
    console.log('drag leave');
}

function dragdrop (event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
    console.log('drag drop');
}