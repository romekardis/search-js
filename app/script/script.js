window.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.items__item');
    

    function mouseEvents (callback) {
        for (var i = 0; i < items.length; i++) {
            items[i].onmouseover = e => {
                callback(e.target, true);
            }
            items[i].onmouseleave = e => {
                callback(e.target, false);
            }
        }
    }
    mouseEvents(function (item, bool) {
        // if (bool) {
        //     item.querySelector('div').classList.add('view')
        // }   else {
        //     item.querySelector('div').classList.remove('view');
        // }
        bool ? item.querySelector('div').classList.add('view') : 
               item.querySelector('div').classList.remove('view')
    })
});