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
    const right = $('<button class="right">right</button>');
    const left = $('<button class="left">left</button>');

    container.append(up);
    container.append(down);
    container.append(right);
    container.append(left);

    //Variables
    let counter,
        page,
        nextPage,
        prevPage;

    //Animation Classes

    const show = ' show-page ';
    const downOutClass = ' pt-page-moveToTopEasing pt-page-ontop ';
    const downInClass = ' pt-page-moveFromBottom ';
    const upOutClass = ' pt-page-moveToBottomEasing pt-page-ontop ';
    const upInClass = ' pt-page-moveFromTop ';

    //Events


    up.attr('disabled', 'disabled');

    counter = 0;
    page = counter;

    down.on('click', () => {
        //Clean Class
        $('#' + prevPage + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);
        $('#' + page + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);
        $('#' + nextPage + '').removeClass(show + upInClass + upOutClass + downInClass + downOutClass);


        console.log(page);
        if (page !== 7) {
            up.removeAttr('disabled');
            page = $('#' + counter + '').data('page');
            nextPage = page + 1;

            $('#' + page + '').addClass(show + downOutClass);
            $('#' + nextPage + '').addClass(show + downInClass);

        } else {
            down.attr('disabled', 'disabled');
            $('#8').addClass(show);
        }
        counter++;
    });

    up.on('click', () => {
        console.log(page);

        $('#' + (prevPage) + '').removeClass(show + downInClass + downOutClass + upInClass + upOutClass);
        $('#' + page + '').removeClass(show + downOutClass + downInClass + upInClass + upOutClass);
        $('#' + nextPage + '').removeClass(show + downInClass + downOutClass + upInClass + upOutClass);

        if (page !== 2) {
            down.removeAttr('disabled');
            page = $('#' + counter + '').data('page');
            prevPage = page - 1;

            $('#' + page + '').addClass(show + upOutClass);
            $('#' + prevPage + '').addClass(show + upInClass);

        } else {
            up.attr('disabled', 'disabled');
            $('#1').addClass(show);
        }

        counter--;
    });


    return container;
};
