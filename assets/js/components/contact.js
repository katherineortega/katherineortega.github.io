'use strict';

const Contact = () => {
    //JSON data
    /*const menu = state.language.menu;*/

    const container = $('<section class="page pt-page-8" data-page="8"></section>');
    const h1 = $('<h1>Page 8</h1>');
    container.append(h1);


    /*const container = $('<section class="container contacto page pt-page-8"></section>');
     const row = $('<div class="row"></div>');

     const divContact = $('<div class="col-lg-10 col-lg-offset-1"></div>');
     const subTitle = $('<h3 class="subtitle">'+menu.contact+'</h3>');
     const hr = $('<hr>');

     const contact = $('<div class="col-lg-12"></div>');
     const number = $('<p class="text">'+state.data.phone+'</p>');
     const email = $('<p class="text"><a href="#" target="_blank">'+state.data.email+'</a></p>');
     const github = $('<span class="text link"><a href="'+state.data.github+'" target="_blank">GitHub</a></span>');
     const linkedin = $('<span class="text link"><a href="'+state.data.linkedin+'" target="_blank">LinkedIn</a></span>');

     const footerMenu = $('<div class="col-lg-12"></div>');
     const ul = $('<ul></ul>');
     const home = $('<li><a href="#">'+menu.home+'</a></li>');
     const about = $('<li><a href="#">'+menu.about.title+'</a></li>');
     const portfolio = $('<li><a href="#">'+menu.portfolio.title+'</a></li>');
     const talk = $('<li><a href="#">'+menu.contact+'</a></li>');

     contact.append(number);
     contact.append(email);
     contact.append(github);
     contact.append(linkedin);

     ul.append(home);
     ul.append(about);
     ul.append(portfolio);
     ul.append(talk);
     footerMenu.append(ul);

     divContact.append(subTitle);
     divContact.append(hr);
     divContact.append(contact);
     divContact.append(footerMenu);

     row.append(divContact);
     container.append(row);


     const footer = $('<footer></footer>');
     const p = $('<p>' + state.data.copyright + ' | '+state.language.footer.made+' <a href="'+state.data.laboratoria+'"' +
     ' class="laboratoria" target="_blank">Laboratoria</a> '+state.language.footer.by+' <a href="'+state.data.portfolio+'"' +
     ' class="developer">'+state.data.name + ' ' + state.data.lastName+'</a></p>');

     footer.append(p);

     container.append(footer);*/

    return container;
};