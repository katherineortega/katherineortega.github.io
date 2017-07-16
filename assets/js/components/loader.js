'use strict';

const Loader = (wrapper) => {

    //Loader
    const loader = $('<div class="page pt-page-0 show-page"></div>');
    const language = $('<div class="btn"></div>');
    const spanish = $('<button class="btn-es">Español</button>');
    const english = $('<button class="btn-en">English</button>');
    language.append(english);
    language.append(spanish);
    loader.append(language);

    //Pages
    const container = $('<div class="perspective"></div>');

    //Events
    spanish.on('click', () => {
        container.append(Header().addClass('show-page'));
        container.append(About());
        container.append(Portfolio());
        projects(container);
        container.append(Contact());


        setTimeout(() => {
            loader.removeClass('show-page');
            wrapper.append(container);
            wrapper.append(Navigator());
        }, 0);
    });

    return loader;
};
