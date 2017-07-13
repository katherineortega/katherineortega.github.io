'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());

    root.append(wrapper);
};

const state = {
    data: null,
    es: null,
    en: null
};

$(_ => {
    $.getJSON('assets/js/data.json', (res) => {
        state.data = res.data;
        state.es = res.es;
        state.en = res.en;

        const root = $('.root');
        render(root);
    });
});