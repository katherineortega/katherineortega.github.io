'use strict';

//Animation Classes Page Translation
const show = ' show-page ';
const downOutClass = ' page-moveToTopEasing ';
const downInClass = ' page-moveFromBottom  page-ontop ';
const upOutClass = ' page-moveToBottomEasing ';
const upInClass = ' page-moveFromTop page-ontop ';
const rightOutClass = ' page-moveToLeftEasing page-ontop ';
const rightInClass = ' page-moveFromRight ';
const leftOutClass = ' page-moveToRightEasing page-ontop ';
const leftInClass = ' page-moveFromLeft ';

const removeAnimation = show + upInClass + upOutClass + downInClass + downOutClass + rightInClass + rightOutClass + leftInClass + leftOutClass;

const Navigator = (wrapper) => {
 const container = $('<div class="navegadores"></div>');

 //Back Modal
 const backPage = $('<span class="icon-back icon-cross"></span>');
 backPage.addClass('hide-fixed');

 //Buttons
 const up = $('<span class="up icon icon-chevron-up"></span>');
 const down = $('<span class="down icon icon-chevron-down"></span>');
 container.append(up);
 container.append(down);

 //Menu
 const divLogo = $('<div class="main-menu"></div>');
 const mainMenu = $('<a href="#"><span class="icon icon-menu"></span></a>');
 divLogo.append(mainMenu);
 wrapper.append(divLogo);

 //Variables
 let counter,
  page,
  nextPage,
  prevPage;

 //Events
 up.addClass('hide-arrow');
 counter = 1;

 //menu

 mainMenu.on('click', () => {
  const menu = $('<div class="container--menu container show-page page-ontop"></div>');
  const row = $('<div class="row"></div>');
  const closeMenu = $('<span class="icon-cross icon-back"></span>');

  const indexMenu = $('<div class="col-lg-4 col-xs-offset-1 col-xs-4 col-menu"></div>');
  const projectsmenu = $('<div class="col-lg-5 col-lg-offset-1 col-xs-4 col-xs-offset-1' +
   ' projects-menu"></div>');

  const menuskills = (state.language.menu.skills.title).split(" ").join("");
  const menuportfolio = (state.language.menu.portfolio.title).split(" ").join("");
  const menucontact = (state.language.menu.contact).split(" ").join("");

  const home = $('<a href="' + state.data.portfolio + '"><h1>' + state.language.menu.home + '</h1></a>');
  const about = $('<a href="#"><h1>' + state.language.menu.about.title + '</h1></a>');
  const skills = $('<a href="#"><h1>' + menuskills + '</h1></a>');
  const portfolio = $('<a href="#"><h1 class="portfolio">' + menuportfolio + '</h1></a>');
  const contact = $('<a href="#"><h1>' + menucontact + '</h1></a>');

  const vacio = $('<a><h1>_</h1></a>');
  const pinterest = $('<a href="#"><h1>' + state.data.projects[0].name + '</h1></a>');
  const yape = $('<a href="#"><h1>' + state.data.projects[1].name + '</h1></a>');
  const pokedex = $('<a href="#"><h1>' + state.data.projects[2].name + '</h1></a>');
  const yummy = $('<a href="#"><h1>' + state.data.projects[3].name + '</h1></a>');


  //close Menu
  page = counter;
  prevPage = page - 1;
  nextPage = page + 1;

  const menuFunction = (actual, index) => {
   $('#' + actual + '').removeClass(removeAnimation);
   menu.removeClass(removeAnimation);
   counter = index;
   page = counter;

   $('#' + page + '').addClass(show + leftInClass);
   menu.addClass(show + leftOutClass);
   setTimeout(() => {
    menu.remove();
    keyDown();
   }, 500);
  };

  //About
  about.on('click', () => {
   menuFunction(page, 1);
  });
  skills.on('click', () => {
   menuFunction(page, 2);
  });
  portfolio.on('click', () => {
   menuFunction(page, 3);
  });
  pinterest.on('click', () => {
   menuFunction(page, 4);
  });
  yape.on('click', () => {
   menuFunction(page, 5);
  });
  pokedex.on('click', () => {
   menuFunction(page, 6);
  });
  yummy.on('click', () => {
   menuFunction(page, 7);
  });
  contact.on('click', () => {
   menuFunction(page, 8);
  });

  $('#' + prevPage + '').removeClass(removeAnimation);
  $('#' + page + '').removeClass(removeAnimation);
  $('#' + nextPage + '').removeClass(removeAnimation);

  $('#' + page + '').addClass(show + rightOutClass);
  menu.addClass(show + rightInClass);

  row.append(closeMenu);
  menu.append(row);
  $(window).off('keydown');

  if (state.language == state.english) {
   $('body').addClass('english');
   menu.addClass('english');
  }

  closeMenu.on('click', () => {
   $('#' + page + '').removeClass(removeAnimation);
   menu.removeClass(removeAnimation);

   $('#' + page + '').addClass(show + leftInClass);
   menu.addClass(show + leftOutClass);
   setTimeout(() => {
    menu.remove();
    keyDown();
   }, 500);
  });


  //Appends
  projectsmenu.append(vacio);
  projectsmenu.append(pinterest);
  projectsmenu.append(yape);
  projectsmenu.append(pokedex);
  projectsmenu.append(yummy);

  indexMenu.append(home);
  indexMenu.append(about);
  indexMenu.append(skills);
  indexMenu.append(portfolio);
  indexMenu.append(contact);
  row.append(indexMenu);
  row.append(projectsmenu);
  wrapper.append(menu);
 });

 const totalSections = $('section').length;
 const downPage = () => {
  //Clean Class
  $('#' + prevPage + '').removeClass(removeAnimation);
  $('#' + page + '').removeClass(removeAnimation);
  $('#' + nextPage + '').removeClass(removeAnimation);

  if (counter !== totalSections) {
   up.removeClass('icon-hide');
   down.removeClass('icon-hide');
   page = $('#' + counter + '').data('page');
   nextPage = page + 1;

   $('#' + page + '').addClass(show + downOutClass);
   $('#' + nextPage + '').addClass(show + downInClass);
   counter++;
  } else {
   down.addClass('icon-hide');
   $(`#${totalSections}`).addClass(show);
  }
 };
 const upPage = () => {
  //Clean Class
  $('#' + prevPage + '').removeClass(removeAnimation);
  $('#' + page + '').removeClass(removeAnimation);
  $('#' + nextPage + '').removeClass(removeAnimation);

  if (counter !== 1) {
   down.removeClass('icon-hide');
   up.removeClass('icon-hide');
   page = $('#' + counter + '').data('page');
   prevPage = page - 1;

   $('#' + page + '').addClass(show + upOutClass);
   $('#' + prevPage + '').addClass(show + upInClass);
   counter--;
  } else {
   up.addClass('icon-hide');
   $('#1').addClass(show);
  }
 };

 down.on('click', () => {
  downPage();
 });
 up.on('click', () => {
  upPage();
 });

 backPage.on('click', () => {
  let pages = counter;
  $('#' + pages + '').removeClass(removeAnimation);
  $('.container--modal').removeClass(removeAnimation);

  $('#' + pages + '').addClass(show + leftInClass);
  $('.container--modal').addClass(show + leftOutClass);


  setTimeout(() => {
   $('.navegadores').removeClass(' hide-fixed ');
   $('.main-menu').removeClass(' hide-fixed ');
   $('.container--modal').remove();
   keyDown();
  }, 500);
  backPage.addClass('hide-fixed');
 });

 const keyDown = () => {
  $(window).on('keydown', (i) => {
   const key = i.keyCode || i.which;
   if (key == 38) {
    upPage();
   } else if (key == 40) {
    downPage();
   }
  });
 };
 keyDown();

 wrapper.append(container);
 wrapper.append(backPage);
};
