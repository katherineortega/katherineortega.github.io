'use strict';

const Navigator = () => {
    const container = $('<div class="navegadores"></div>');
    const up = $('<button class="up">up</button>');
    const down = $('<button class="down">down</button>');
    const right = $('<button class="right">right</button>');
    const left = $('<button class="left">left</button>');


    /*let countPage = 1,
        outClass = '',
        inClass = '';

    const classes = (type) => {
        switch (type) {
            case 1:
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 3:
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 4:
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                inClass = 'pt-page-moveFromTop';
                break;
        }
    };

    down.on('click', () => {

        if (countPage < 8) {
            down.removeClass('hide-button');
            up.removeClass('hide-button');

            console.log(countPage);
            let nextPage = countPage + 1;

            $('.pt-page-' + countPage + '').addClass('show-page pt-page-moveToTopEasing');
            $('.pt-page-' + countPage + '').removeClass('pt-page-moveToBottomEasing');
            $('.pt-page-' + nextPage + '').addClass('show-page pt-page-moveFromBottom');
            $('.pt-page-' + nextPage + '').removeClass('pt-page-moveFromTop');

            countPage = nextPage;

        } else {
            down.addClass('hide-button');
        }

    });

    up.on('click', () => {

        console.log(countPage);
        if (countPage > 1) {
            up.removeClass('hide-button');
            down.removeClass('hide-button');

            let prevPage = countPage - 1;

            $('.pt-page-' + prevPage + '').removeClass('pt-page-moveFromBottom');
            $('.pt-page-' + prevPage + '').addClass('show-page pt-page-moveFromTop');
            $('.pt-page-' + countPage + '').removeClass('pt-page-moveToTopEasing');
            $('.pt-page-' + countPage + '').addClass('show-page pt-page-moveToBottomEasing');

            countPage = prevPage;
        } else {
            up.addClass('hide-button');
        }
    });*/

    container.append(up);
    container.append(down);
    container.append(right);
    container.append(left);

    return container;
};
