'use strict';

const Header = () => {
    //JSON data
    const menu = state.language.menu;

    //Container General
    const container = $('<header id="1" class="container pt-page-1" data-page="1"></header>');

     const nav = $('<nav class="row"></nav>');
     const section = $('<div class="row main-section"></div>');

     //Nav
     const divLogo = $('<div class="col-lg-1 col-lg-offset-1"></div>');
     const imgLogo = $('<img class="img-responsive" src="assets/img/logo-kath.png"' +
     ' alt="Katherine Ortega"/>');
     const divMenu = $('<div class="col-lg-5 col-lg-offset-5"></div>');
     const ulMenu = $('<ul class="row"></ul>');
     const divAbout = $('<li class="col-lg-3"></li>');
     const about = $('<a href="#">'+ menu.about.title +'</a>');
     const divPortfolio = $('<li class="col-lg-3"></li>');
     const portfolio = $('<a href="#">'+ menu.portfolio.title +'</a>');
     const divContact = $('<li class="col-lg-3"></li>');
     const contact = $('<a href="#">'+ menu.contact +'</a>');




     divLogo.append(imgLogo);
     divAbout.append(about);
     ulMenu.append(divAbout);
     divPortfolio.append(portfolio);
     ulMenu.append(divPortfolio);
     divContact.append(contact);
     ulMenu.append(divContact);
     divMenu.append(ulMenu);

     nav.append(divLogo);
     nav.append(divMenu);


     section.append(pGreeting);
     section.append(h1Name);
     section.append(pCareer);

     container.append(nav);
     container.append(section);

    return container;
};