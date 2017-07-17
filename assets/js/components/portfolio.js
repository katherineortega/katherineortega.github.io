'use strict';

const Portfolio = () => {
    const container = $('<section id="3" class="container container--portfolio"' +
        '  data-page="3"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.portfolio.title + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const text = $('<p class="text">' + state.language.menu.portfolio.brief + '</p>');

    colTitle.append(title);
    //colTitle.append(hr);
    colText.append(text);
    row.append(colTitle);
    row.append(colText);
    container.append(row);

    if (state.language == state.english) {
        container.addClass('english');
    }
    return container;
};

const projects = (container) => {
    //Projects
    state.data.projects.forEach((data, index) => {

        let i = index + 4;
        const project = $('<section id="' + i + '" class="container container--project"' +
            ' data-page="' + i + '"></section>');

        const divProject = $('<div class="col-lg-10 col-lg-offset-1"></div>');
        const divLogo = $('<div class="col-lg-7 logo-proyecto ' + data.name + '-border"></div>');
        const logo = $('<img class="img-responsive" src="assets/img/' + state.language.projects[index].logo + '" alt="' + data.name + '">');
        const divBrief = $('<div class="col-lg-6 col-lg-offset-6 text-proyecto"></div>');
        const brief = $('<p>' + state.language.projects[index].synopsis + '</p>');
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

        //Modal
        link.on('click', () => {
            container.append(modalProjects(data, i));
        });

        if (state.language == state.english) {
            project.addClass('english');
        }

        container.append(project);
    });
};

const modalProjects = (data, i) => {
    $(window).off('keydown');
    const index = i - 4;

    const modal = $('<section class="container container--modal"></section>');

    const row = $('<div class="row"></div>');
    const colMockUp = $('<div class="col-xs-12 col-lg-3 col-lg-offset-2"></div>');
    const divMockup = $('<div class="container--mockup"></div>');
    const mockUp = $('<img class="mockup-cellphone" src="assets/img/' + state.language.mockup + '"/>');
    const insideMockUp = $('<div class="container--iframe"></div>');
    const iframe = $('<iframe src="' + state.data.projects[index].link+ '"><p>Your browser does not support iframes.</p></iframe>');

    const colText = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1' +
        ' container--modal__info"></div>');
    const title = $('<h1 class="modal-title">' + state.data.projects[index].name + '</h1>');
    colText.append(title);

    const divOne = $('<div class="info--one"></div>');
    const text = $('<p class="text one">' + state.language.projects[index].synopsis + '</p>');
    const text2 = $('<p class="text two">' + state.language.projects[index].synopsis + '</p>');
    const iconNext = $('<span class="icon-down-arrow"></span>');

    const divTwo = $('<div class="info--two"></div>');
    const text3 = $('<p class="text three">' + state.language.projects[index].synopsis + '</p>');
    const text4 = $('<p class="text four">' + state.language.projects[index].synopsis + '</p>');
    const iconBack = $('<span class="icon-up-arrow"></span>');

    insideMockUp.append(iframe);
    divMockup.append(insideMockUp);
    divMockup.append(mockUp);
    colMockUp.append(divMockup);
    divOne.append(text);
    divOne.append(text2);
    divOne.append(iconNext);
    divTwo.append(text3);
    divTwo.append(text4);
    divTwo.append(iconBack);

    colText.append(divOne);

    iconNext.on('click', () => {
        divOne.remove();
        colText.append(divTwo);
        divTwo.fadeIn();
    });

    iconBack.on('click', () => {
        divTwo.remove();
        colText.append(divOne);
        divOne.fadeIn();
    });

    row.append(colMockUp);
    row.append(colText);

    //Page Transition
    setTimeout(() => {
        $('.icon-back').removeClass('hide-fixed');
    }, 500);
    let page = i,
        prevPage = page - 1,
        nextPage = page + 1;

    $('#' + prevPage + '').removeClass(removeAnimation);
    $('#' + page + '').removeClass(removeAnimation);
    $('#' + nextPage + '').removeClass(removeAnimation);

    $('#' + page + '').addClass(show + rightOutClass);
    modal.addClass(show + rightInClass);

    $('.navegadores').addClass(' hide-fixed ');
    $('.main-logo').addClass(' hide-fixed ');
    //End Page Transition

    if (state.language == state.english) {modal.addClass('english');}

    modal.append(row);
    return modal;
};