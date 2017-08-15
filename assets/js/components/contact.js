'use strict';

const Contact = () => {
    const container = $('<section id="8" class="container container--contact"' +
        ' data-page="8"></section>');
    const row = $('<div class="row"></div>');

    const colTitle = $('<div class="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-1"></div>');
    const title = $('<h1 class="title">' + state.language.menu.contact + '</h1>');
    //const hr = $('<hr>');

    const colText = $('<div class="col-xs-12 col-md-4 col-md-offset-1"></div>');
    const number = $(`<p class="text"><a href="tel:+51 ${state.data.phone}"><span class="contact-icon icon-smartphone"></span>(+51) ${state.data.phone}</a></p>`);
    const email = $(`<p class="text"><a href="mailto:${state.data.email}?Subject=${state.language.sendEmail}" target="_blank"><span class="contact-icon icon-mail"></span>${state.data.email}</a></p>`);
    const github = $(`<p class="text"><a href="${state.data.github}" target="_blank"><span class="contact-icon icon-github"></span>GitHub</a></p>`);
    const linkedin = $(`<p class="text"><a href="${state.data.linkedin}" target="_blank"><span class="contact-icon icon-linkedin"></span>LinkedIn</a></p>`);

    colText.append(number);
    colText.append(email);
    colText.append(github);
    colText.append(linkedin);

    const footer = $('<footer></footer>');
    const p = $(`<p>${state.data.copyright} | ${state.language.made}<a href="${state.data.portfolio}">${state.data.name} ${state.data.lastName}</a></p>`);

    footer.append(p);

    colTitle.append(title);
    row.append(colTitle);
    row.append(colText);
    row.append(footer);
    container.append(row);

    if (state.language == state.english){
        container.addClass('english');
    }

    return container;
};