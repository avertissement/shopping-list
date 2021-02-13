$('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    const food = $('input#shopping-list-entry').val()
    $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${food}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>
    `)
})

$('ul.shopping-list').on('click', 'li .shopping-item-toggle', function(e){
    e.preventDefault();
    const stepOne = $(this).closest('.shopping-item-controls');
    const stepTwo = stepOne.siblings('.shopping-item');
    stepTwo.toggleClass('shopping-item__checked');
})

$('ul.shopping-list').on('click', 'li .shopping-item-delete', function(e){
    e.preventDefault();
    $(this).closest('li').addClass('deletion')
})

