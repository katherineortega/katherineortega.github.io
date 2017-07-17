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

    //logo
    const divLogo = $('<div class="main-logo"></div>');
    const logo = $('<a href="' + state.data.portfolio + '"><img src="assets/img/' + state.data.logo + '"/></a>');

    divLogo.append(logo);

    //Buttons
    const up = $('<span class="up icon icon-up-arrow"></span>');
    const down = $('<span class="down icon icon-down-arrow"></span>');
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
        } else {
            down.addClass('icon-hide');
            $('#8').addClass(show);
        }
    };
    const upPage = () => {
        //Clean Class
        $('#' + prevPage + '').removeClass( removeAnimation );
        $('#' + page + '').removeClass( removeAnimation );
        $('#' + nextPage + '').removeClass( removeAnimation );

        if (counter !== 1) {
            down.removeClass('icon-hide');
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

    $(window).on('keydown', (i) => {
        const key = i.keyCode || i.which;
        if (key == 38) {
            upPage();
        } else if (key == 40) {
            downPage();
        }
    });

    wrapper.append(divLogo);
    wrapper.append(container);
};
