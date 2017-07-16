'use strict';

/*case 'left':
 outClass = ' pt-page-moveToLeftEasing pt-page-ontop ';
 inClass = ' pt-page-moveFromRight ';
 break;
 case 'right':
 outClass = ' pt-page-moveToRightEasing pt-page-ontop ';
 inClass = ' pt-page-moveFromLeft ';
 break;*/

const Navigator = () => {
    const container = $('<div class="navegadores"></div>');
    //Buttons
    const up = $('<button class="up">up</button>');
    const down = $('<button class="down">down</button>');
    container.append(up);
    container.append(down);

    //Variables
    let counter,
        page,
        nextPage,
        prevPage;

    //Animation Classes

    const show = ' show-page ';
    const downOutClass = ' page-moveToTopEasing ';
    const downInClass = ' page-moveFromBottom  page-ontop ';
    const upOutClass = ' page-moveToBottomEasing ';
    const upInClass = ' page-moveFromTop page-ontop ';

    //Events
    up.attr('disabled', 'disabled');
    counter = 1;

    down.on('click', () => {
        //Clean Class
        $('#' + prevPage + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);
        $('#' + page + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);
        $('#' + nextPage + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);

        if (counter !== 8) {
            up.removeAttr('disabled');
            page = $('#' + counter + '').data('page');
            nextPage = page + 1;

            $('#' + page + '').addClass(show + downOutClass);
            $('#' + nextPage + '').addClass(show + downInClass);

            counter++;
        } else {
            down.attr('disabled', 'disabled');
            $('#8').addClass(show);
        }
    });

    up.on('click', () => {
        //Clean Class
        $('#' + prevPage + '').removeClass(show + downInClass + downOutClass + upInClass + upOutClass);
        $('#' + page + '').removeClass(show + downOutClass + downInClass + upInClass + upOutClass);
        $('#' + nextPage + '').removeClass(show + downInClass + downOutClass + upInClass + upOutClass);

        if (counter !== 1) {
            down.removeAttr('disabled');
            page = $('#' + counter + '').data('page');
            prevPage = page - 1;

            $('#' + page + '').addClass(show + upOutClass);
            $('#' + prevPage + '').addClass(show + upInClass);

            counter--;
        } else {
            up.attr('disabled', 'disabled');
            $('#1').addClass(show);
        }
    });

    return container;
};
