'use strict';

const About = () => {

    //Container General
    const container = $('<header id="1" class="container container--about"' +
        ' data-page="1"></header>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.about.title + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const text = $('<p>' + state.language.menu.about.brief + '</p>');

    colTitle.append(title);
    //colTitle.append(hr);
    colText.append(text);
    row.append(colTitle);
    row.append(colText);
    container.append(row);
    if (state.language == state.english){
        $('body').addClass('english');
        container.addClass('english');
    }
    return container;
};