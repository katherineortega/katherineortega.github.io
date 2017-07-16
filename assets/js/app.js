'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Loader(wrapper));

    root.append(wrapper);
};

const state = {
    data: null,
    english: null,
    spanish: null,
    language: null
};

$(_ => {
    $.getJSON('assets/js/data.json', (res) => {
        state.data = res.data;
        state.spanish = res.spanish;
        state.english = res.english;

        const root = $('.root');
        render(root);
    });
});

