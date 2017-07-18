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

let actualPage = 1;

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

    //Variables
    let counter,
        page,
        nextPage,
        prevPage;

    //Events
    up.addClass('hide-arrow');
    counter = 1;

    const downPage = () => {
        //Clean Class
        $('#' + prevPage + '').removeClass(removeAnimation);
        $('#' + page + '').removeClass(removeAnimation);
        $('#' + nextPage + '').removeClass(removeAnimation);

        if (counter !== 8) {
            up.removeClass('icon-hide');
            page = $('#' + counter + '').data('page');
            nextPage = page + 1;

            $('#' + page + '').addClass(show + downOutClass);
            $('#' + nextPage + '').addClass(show + downInClass);
            counter++;
            actualPage = counter;
            console.log(counter);
        } else {
            down.addClass('icon-hide');
            $('#8').addClass(show);
        }
    };
    const upPage = () => {
        //Clean Class
        $('#' + prevPage + '').removeClass(removeAnimation);
        $('#' + page + '').removeClass(removeAnimation);
        $('#' + nextPage + '').removeClass(removeAnimation);

        if (counter !== 1) {
            down.removeClass('icon-hide');
            page = $('#' + counter + '').data('page');
            prevPage = page - 1;

            $('#' + page + '').addClass(show + upOutClass);
            $('#' + prevPage + '').addClass(show + upInClass);
            counter--;
            actualPage = counter;
            console.log(counter);
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
            $(window).on('keydown', (i) => {
                const key = i.keyCode || i.which;
                if (key == 38) {
                    upPage();
                } else if (key == 40) {
                    downPage();
                }
            });
        }, 500);
        backPage.addClass('hide-fixed');
    });

    $(window).on('keydown', (i) => {
        const key = i.keyCode || i.which;
        if (key == 38) {
            upPage();
        } else if (key == 40) {
            downPage();
        }
    });

    //menu
    const divLogo = $('<div class="main-menu"></div>');
    const mainMenu = $('<a href="#"><span class="icon' +
        ' icon-menu"></span></a>');


    mainMenu.on('click', () => {
        const menu = $('<div class="container--menu container show-page page-ontop"></div>');
        const row = $('<div class="row"></div>');
        const closeMenu = $('<span class="icon icon-cross icon-back"></span>');

        let page = actualPage,
            prevPage = page - 1,
            nextPage = page + 1;

        $('#' + prevPage + '').removeClass(removeAnimation);
        $('#' + page + '').removeClass(removeAnimation);
        $('#' + nextPage + '').removeClass(removeAnimation);

        $('#' + page + '').addClass(show + leftOutClass);
        menu.addClass(show + leftInClass);

        row.append(closeMenu);
        menu.append(row);
        $(window).off('keydown');

        if (state.language == state.english) {
            $('body').addClass('english');
            menu.addClass('english');
        }

        closeMenu.on('click', () => {
            $('#' + actualPage + '').removeClass(removeAnimation);
            menu.removeClass(removeAnimation);

            $('#' + actualPage + '').addClass(show + rightInClass);
            menu.addClass(show + rightOutClass);
            setTimeout(() => {
                menu.remove();
                $(window).on('keydown', (i) => {
                    const key = i.keyCode || i.which;
                    if (key == 38) {
                        upPage();
                    } else if (key == 40) {
                        downPage();
                    }
                });
            }, 500);
        });
        wrapper.append(menu);
    });


    divLogo.append(mainMenu);

    wrapper.append(divLogo);
    wrapper.append(container);
    wrapper.append(backPage);
};
