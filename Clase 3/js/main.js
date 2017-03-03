// Section Form Visibility
var form = $('section.form');
var list = $('section.list');

$('#displayForm').on('click', function () {
    if (form.hasClass('hidden')) {
        form.removeClass('hidden');
    }
    else if(!list.hasClass('hidden')) {
        list.addClass('hidden');
    }
    else {
        form.addClass('hidden');
    }
})

$('#displayList').on('click', function () {
    if (list.hasClass('hidden')) {
        list.removeClass('hidden');
    }
    else if(!form.hasClass('hidden')) {
        console.log('hi');
        form.addClass('hidden');
    }
    else {
        list.addClass('hidden');
    }
})

// Input Range Code
var money = document.getElementById('money');
money.oninput = function () {
    document.getElementById('actualNum').innerHTML = money.value;
}
document.getElementById('min').innerHTML = money.min;
document.getElementById('max').innerHTML = money.max;
