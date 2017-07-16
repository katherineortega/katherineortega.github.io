'use strict';

const Skills = () => {

    const menu = state.language.menu;

    const container = $('<section id="2" class="container pt-page-2" data-page="2"></section>');

    const row = $('<div class="row"></div>');
    const divAbout = $('<div class="col-lg-8 col-lg-offset-2"></div>');

    const subTitle = $('<h3 class="subtitle">' + menu.about.title + '</h3>');
    const hr = $('<hr>');
    const text = ('<p class="text">' + menu.about.brief + '</p>');

    const divResume = $('<div class="curriculum col-lg-4  col-lg-offset-4"></div>');
    const iconResume = $('<span></span>');
    const resume = $('<span>' + state.language.main.resume + '</span>');

    divResume.append(iconResume);
    divResume.append(resume);

    divAbout.append(subTitle);
    divAbout.append(hr);
    divAbout.append(text);
    divAbout.append(divResume);

    row.append(divAbout);
    container.append(row);

    return container;
};