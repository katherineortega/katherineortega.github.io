'use strict';

const Loader = (wrapper) => {

    wrapper.empty();
    //Loader
    const loader = $('<div class="container container--loader show-page"></div>');

    const pGreeting = $('<p>' + state.english.greeting + '</p>');
    const h1Name = $('<h1>' + state.data.name + '<br>' + state.data.lastName + '</h1>');
    const profile = $('<div class="">');
    const textName = $('<a class="link link--title" href="#">' + state.data.name + ' ' + state.data.lastName + '<span' +
        ' data-letters="' + state.data.name + ' ' + state.data.lastName + '"></span><span data-letters="' + state.data.name + ' ' + state.data.lastName + '"></span></a>');
    const pCareer = $('<p>' + state.data.career.one + ' & ' + state.data.career.two + '</p>');

    profile.append(pGreeting);
    profile.append(textName);
    profile.append(pCareer);

    const language = $('<div class="btn"></div>');
    const spanish = $('<span class="btn"><a href="#" data-hover="Español">Español</a></span>');
    const english = $('<span class="btn"><a href="#" data-hover="English">English</a></span>');
    language.append(english);
    language.append(spanish);
    profile.append(language);
    loader.append(profile);

    //Pages
    const container = $('<div class="perspective"></div>');
    const content = (parent) => {
        container.empty();
        container.append(About().addClass('show-page'));
        container.append(Skills());
        container.append(Portfolio());
        projects(container);
        container.append(Contact());

        parent.append(container);
        setTimeout(() => {
            parent.append(Navigator(wrapper));
            loader.removeClass('show-page');
        }, 2000);
    };

    //Events
    spanish.on('click', () => {
        state.language = state.spanish;
        setTimeout(() => {
            loader.addClass('page-moveToLeftEasing page-ontop');
        }, 1300);
        content(wrapper);
    });
    english.on('click', () => {
        setTimeout(() => {
            loader.addClass('page-moveToLeftEasing page-ontop');
        }, 1300);
        state.language = state.english;
        content(wrapper);
    });

    return loader;
};
