'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Loader(wrapper));

    root.append(wrapper);
};

const state = {
    data: null,
    language: null
};

$(_ => {
    $.getJSON('assets/js/data.json', (res) => {
        state.data = res.data;
        state.language = res.spanish;

        const root = $('.root');
        render(root);
    });
});

