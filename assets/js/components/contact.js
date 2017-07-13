'use strict';

const Contact = () => {
    const container = $('<section class="container contacto"></section>');
    const row = $('<div class="row"></div>');

    const divContact = $('<div class="col-lg-10 col-lg-offset-1"></div>');
    const subTitle = $('<h3 class="subtitle">HABLEMOS</h3>');
    const hr = $('<hr>');

    const contact = $('<div class="col-lg-12"></div>');
    const number = $('<p class="text">+51 - 992865356</p>');
    const email = $('<p class="text"><a href="#">katherine.ortegaramos@gmail.com</a></p>');
    const github = $('<span class="text"><a href="#">GitHub</a></span>');
    const linkedin = $('<span class="text"><a href="#">LinkedIn</a></span>');

    const menu = $('<div class="col-lg-12"></div>');
    const ul = $('<ul></ul>');
    const home = $('<li><a href="#">INICIO</a></li>');
    const about = $('<li><a href="#">SOBRE MI</a></li>');
    const portfolio = $('<li><a href="#">PORTAFOLIO</a></li>');
    const talk = $('<li><a href="#">HABLEMOS</a></li>');

    contact.append(number);
    contact.append(email);
    contact.append(github);
    contact.append(linkedin);

    ul.append(home);
    ul.append(about);
    ul.append(portfolio);
    ul.append(talk);
    menu.append(ul);

    divContact.append(subTitle);
    divContact.append(hr);
    divContact.append(contact);
    divContact.append(menu);

    row.append(divContact);
    container.append(row);

    return container;
};

const Footer = () => {
    const container = $('<footer></footer>');
    const p = $('<p>' + state.data.copyright + ' | '+state.language.footer.made+' <a href="#"' +
        ' class="laboratoria">Laboratoria</a> '+state.language.footer.by+' <a href="#"' +
        ' class="developer">'+state.data.name + ' ' + state.data.lastName+'</a></p>');

    container.append(p);

    return container;
};
