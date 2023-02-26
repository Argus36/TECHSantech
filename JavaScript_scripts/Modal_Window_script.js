const openModals = document.querySelectorAll('.modal');
const amenities = document.querySelector('.amenities');

for(let openModal of openModals) {
    openModal.addEventListener('click',() => {
    const wrapper = document.createElement('div');
    wrapper.className = 'modal_Wrapper';
    amenities.appendChild(wrapper);

    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    wrapper.appendChild(backdrop);
    backdrop.addEventListener('click', () => {
        wrapper.remove();
    });

    const window_modal = document.createElement('div');
    window_modal.className = 'window_modal';
    wrapper.appendChild(window_modal);

    const img = document.createElement('img');
    img.className = 'img';
    wrapper.appendChild(img);
    img.src = 'img/the_cross.png'
    img.addEventListener('click', () => {
        wrapper.remove();
    });

    const text_1 = document.createElement('p');
    text_1.className = 'text_1';
    window_modal.appendChild(text_1);
    text_1.innerText = 'Вызов сантехника'

    const text_2 = document.createElement('p');
    text_2.className = 'text_2';
    window_modal.appendChild(text_2);
    text_2.innerText = 'Оставьте номер телефона, наш менеджер перезвонит Вам для уточнения деталей заявки'

    const input = document.createElement('input');
    input.className = 'input';
    window_modal.appendChild(input);
    input.type = 'text'
    input.maxLength = '12'
    input.minLength = '12'
    input.placeholder = 'Номер телефона'

    const a = document.createElement('a');
    a.className = 'a';
    window_modal.appendChild(a);
    a.href = '#'
    a.innerText = 'Перезвонить Мне'

    const text_3 = document.createElement('a');
    text_3.className = 'text_3';
    window_modal.appendChild(text_3);
    text_3.innerText = 'Нажимая кнопку, вы даете согласие на '

    const text_3_a = document.createElement('a');
    text_3_a.className = 'text_3_a';
    text_3.appendChild(text_3_a);
    text_3_a.innerText = 'обработку персональных данных'
    text_3_a.href = 'index2.html'
    text_3_a.target = '_blank'
});
}