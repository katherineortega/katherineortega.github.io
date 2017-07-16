'use strict';

const Loader = (wrapper) => {
    //Loader
    const loader = $('<div class="container container--loader show-page"></div>');

    const name = $('<div class="">');
    const textName = $('<a class="link link--title" href="#">KATHERINE ORTEGA<span' +
        ' data-letters="KATHERINE ORTEGA"></span><span data-letters="KATHERINE' +
        ' ORTEGA"></span></a>');
    name.append(textName);
    loader.append(name);

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
