'use strict';

const Portfolio = () => {
    const container = $('<section class="container portfolio"></section>');

    //Main Section
    const portfolio = $('<div class="row portfolio-section"></div>');
    const divPortfolio = $('<div class=" col-lg-8 col-lg-offset-2"></div>');
    const subtitle = $('<h3 class="subtitle">PORTAFOLIO</h3>');
    const hr = $('<hr>');
    const text = $('<p class="text">lorem</p>');
    const ul = $('<ul></ul>');
    const project1 = $('<li class="text"><a href="#">Pinterest</a></li>');
    const project2 = $('<li class="text"><a href="#">Yape</a></li>');
    const project3 = $('<li class="text"><a href="#">Pokédex</a></li>');
    const project4 = $('<li class="text"><a href="#">Yummy!</a></li>');

    state.data.projects.forEach((data,index) => {
        const project = $('<div class="row project-section"></div>');
        const divProject = $('<div class="col-lg-10 col-lg-offset-1 position-relative"></div>');
        const divLogo = $('<div class="col-lg-7 logo-proyecto '+data.name+'-border"></div>');
        const logo = $('<img class="img-responsive" src="assets/img/'+data.logo+'" alt="'+data.name+'">');
        const divBrief = $('<div class="col-lg-6 col-lg-offset-6 text-proyecto"></div>');
        const brief = $('<p>'+state.language.projects[index].brief+'</p>');
        const divLink = $('<p></p>');
        const link = $('<a class="'+data.name+'-color" href="#">'+state.language.more+'</a>');

        if(index == 1 || index == 3){
            divLogo.addClass('col-lg-offset-5');
            divBrief.removeClass('col-lg-offset-6');
        }

        divLink.append(link);
        divBrief.append(brief);
        divBrief.append(divLink);
        divLogo.append(logo);
        divProject.append(divLogo);
        divProject.append(divBrief);
        project.append(divProject);

        container.append(project);

        console.log(data);
        console.log(index);
    });


    ul.append(project1);
    ul.append(project2);
    ul.append(project3);
    ul.append(project4);
    divPortfolio.append(subtitle);
    divPortfolio.append(hr);
    divPortfolio.append(text);
    divPortfolio.append(ul);
    portfolio.append(divPortfolio);

    container.append(portfolio);

    return container;
};