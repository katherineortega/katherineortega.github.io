'use strict';

const Contact = () => {
    const container = $('<section id="8" class="container container--contact"' +
        ' data-page="8"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.contact + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-lg-4 col-lg-offset-1"></div>');
    const number = $('<p class="text"><span class="contact-icon icon-smartphone"></span>' + state.data.phone + '</p>');
    const email = $('<p class="text"><span class="contact-icon icon-mail"></span><a href="#"' +
        ' target="_blank">' + state.data.email + '</a></p>');
    const github = $('<p class="text"><span class="contact-icon icon-github-logo"></span><a' +
        ' href="' + state.data.github + '" target="_blank">GitHub</a></p>');
    const linkedin = $('<p class="text"><span class="contact-icon icon-linkedin"></span><a' +
        ' href="' + state.data.linkedin + '" target="_blank">LinkedIn</a></p>');


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

    if (state.language == state.english){
        container.addClass('english');
    }

    return container;
};