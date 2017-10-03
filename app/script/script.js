window.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.items__item');
    const input = document.querySelector('input');

    function mouseEvents (callback) {
        for (let i = 0; i < items.length; i++) {
            items[i].onmouseover = e => {
                callback(e.target, true);
            }
            items[i].onmouseleave = e => {
                callback(e.target, false);
            }
        }
    };
    mouseEvents(function (item, bool) {
        // if (bool) {
        //     item.querySelector('div').classList.add('view')
        // }   else {
        //     item.querySelector('div').classList.remove('view');
        // }
        if (!item.querySelector('div')) return;   // ошибка при ховере дескришина
        bool ? item.querySelector('div').classList.add('view') : 
               item.querySelector('div').classList.remove('view')
    });

    input.oninput = e => {
    }
});