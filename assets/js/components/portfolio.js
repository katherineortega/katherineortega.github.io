'use strict';

const Portfolio = () => {
    const container = $('<section id="3" class="container container--portfolio"' +
        '  data-page="3"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.portfolio.title + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-5"></div>');
    const text = $('<p>' + state.language.menu.portfolio.brief + '</p>');

    colTitle.append(title);
    //colTitle.append(hr);
    row.append(colTitle);
    row.append(colText);
    container.append(row);


    return container;
};

const projects = (container) => {
    //Projects
    state.data.projects.forEach((data, index) => {

        let i = index + 4;
        const project = $('<section id="' + i + '" class="container pt-page-' + i + '" data-page="' + i + '"></section>');

        const divProject = $('<div class="col-lg-10 col-lg-offset-1 position-relative"></div>');
        const divLogo = $('<div class="col-lg-7 logo-proyecto ' + data.name + '-border"></div>');
        const logo = $('<img class="img-responsive" src="assets/img/' + data.logo + '" alt="' + data.name + '">');
        const divBrief = $('<div class="col-lg-6 col-lg-offset-6 text-proyecto"></div>');
        const brief = $('<p>' + state.language.projects[index].brief + '</p>');
        const divLink = $('<p></p>');
        const link = $('<a class="' + data.name + '-color" href="#">' + state.language.more + '</a>');

        if (index == 1 || index == 3) {
            divLogo.addClass('col-lg-offset-5');
            divBrief.removeClass('col-lg-offset-6');
        }

        divLink.append(link);
        divBrief.append(brief);
        divBrief.append(divLink);
        divLogo.append(logo);
        divProject.append(divLogo);
        divProject.append(divBrief);
        project.append(divProject);
        container.append(project);
    });
};