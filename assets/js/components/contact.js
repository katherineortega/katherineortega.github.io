'use strict';

const Contact = () => {
    const container = $('<section id="8" class="container container--contact"' +
        ' data-page="8"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.contact + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-5"></div>');
    const number = $('<p class="text">' + state.data.phone + '</p>');
    const email = $('<p class="text"><a href="#" target="_blank">' + state.data.email + '</a></p>');
    const github = $('<span class="text link"><a href="' + state.data.github + '" target="_blank">GitHub</a></span>');
    const linkedin = $('<span class="text link"><a href="' + state.data.linkedin + '" target="_blank">LinkedIn</a></span>');


    colText.append(number);
    colText.append(email);
    colText.append(github);
    colText.append(linkedin);


    const footer = $('<footer></footer>');
    const p = $('<p>' + state.data.copyright + ' | ' + state.language.footer.made + ' <a href="' + state.data.laboratoria + '"' +
        ' class="laboratoria" target="_blank">Laboratoria</a> ' + state.language.footer.by + ' <a href="' + state.data.portfolio + '"' +
        ' class="developer">' + state.data.name + ' ' + state.data.lastName + '</a></p>');

    footer.append(p);

    colTitle.append(title);
    //colTitle.append(hr);
    row.append(colTitle);
    row.append(colText);
    row.append(footer);
    container.append(row);

    return container;
};