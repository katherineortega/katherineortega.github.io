'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());
    wrapper.append(About());
    wrapper.append(Portfolio());
    wrapper.append(Contact());
    wrapper.append(Footer());

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