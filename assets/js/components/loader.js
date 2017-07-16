'use strict';

const Loader = (wrapper) => {
    //Loader
    const loader = $('<div class="container container--loader show-page"></div>');

    const pGreeting = $('<p>'+state.language.greeting+'</p>');
    const h1Name = $('<h1>'+state.data.name+'<br>'+state.data.lastName+'</h1>');
    const profile = $('<div class="">');
    const textName = $('<a class="link link--title" href="#">'+state.data.name+' '+state.data.lastName + '<span' +
        ' data-letters="'+state.data.name+' '+state.data.lastName + '"></span><span data-letters="'+state.data.name+' '+state.data.lastName + '"></span></a>');
    const pCareer = $('<p>'+state.data.career.one+ ' & ' + state.data.career.two+ '</p>');

    profile.append(pGreeting);
    profile.append(textName);
    profile.append(pCareer);

    const language = $('<div class="btn"></div>');
    const spanish = $('<button class="btn-es">Español</button>');
    const english = $('<button class="btn-en">English</button>');
    language.append(english);
    language.append(spanish);
    profile.append(language);
    loader.append(profile);

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
