'use strict';

const Skills = () => {
    const container = $('<section id="2" class="container container--skills"' +
        ' data-page="2"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.skills.title + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-5"></div>');
    const text = $('<p>' + state.language.menu.skills.brief + '</p>');

    colTitle.append(title);
    //colTitle.append(hr);
    row.append(colTitle);
    row.append(colText);
    container.append(row);

    return container;
};