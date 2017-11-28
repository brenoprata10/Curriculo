app.controller('TelaInicialCtrl',

function($scope) {           
    
    carregarTela();
    
    $scope.idiomaIngles = function (){
        
        idiomaIngles();
        
    }
    
    $scope.idiomaPortugues = function (){
        
        idiomaPortugues();
        
    }
    
    $scope.idiomaEspanhol = function (){
        
        idiomaEspanhol();
        
    }
    
    $scope.abrirMenu = function(){
        
        $('.button-collapse').off('click').sideNav({
              menuWidth: 250,
              edge: 'left', 
              closeOnClick: true, 
              draggable: true
            }

        );
        
        $('.button-collapse').sideNav('show');
        
        Materialize.showStaggeredList('#slide-out');
            
    }
    
    $scope.carregarSlider = function (){
        
        $(document).ready(function(){
            $('.slider').slider();
        });
        
    }
    
    $scope.carregarParallax = function (){
        
        $(document).ready(function(){
            $('.parallax').parallax();
        });
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
        $(document).ready(function(){
            $('.modal').modal();
        });
        
    }
    
    $scope.carregarTooltip = function (){
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
    }
    
    function carregarTela(){
        
        idiomaPortugues();
        
        $(document).ready(function(){
            $('.parallax').parallax();
        });
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
        $(".drag-target").on("swipeleft", function () {
              $("#sidenav-overlay").trigger("click");
            });
        
        $(document).ready(function(){
            $('.slider').slider();
        });
                
    }
    
    function idiomaIngles(){
        
        if($scope.inicio == "Home"){
           
            return;
            
        }else{
            
            var $toastContent = $('<span class="valign-wrapper"><img style="height:40px;" src="resources/united-states.png">&nbsp&nbspEnglish</span>');
        
            Materialize.toast($toastContent, 1600,'rounded');
        
        /*---------------------------- Menu ---------------------------------------*/
        
        $scope.inicio =                     "Home";   
        
        $scope.logo =                       "Curriculum - Breno Prata";   
        
        $scope.experienciaMenu =            "Experience";
        
        $scope.formacao =                   "Formation";
        
        $scope.certificados =               "Certificates";
        
        $scope.contato =                    "Contact";
        
        /*---------------------------- Menu ---------------------------------------*/
        
        /*---------------------------- Slider -------------------------------------*/
        
        $scope.desenvolvedor =              "Web Developer";
        
        $scope.bemVindo =                   "Welcome to My Curriculum!";
        
        $scope.anos =                       "Years";
        
        $scope.resumo =                     "Summary";
        
        $scope.cafe =                       "Loves Coffee";
        
        $scope.apaixonadoHTML =             "In love with HTML";
        
        $scope.dica =                       "Let me show you:";
            
        $scope.contatoSlider =              "Contact";
        
        $scope.tenteMobile =                "Try accessing this website on the mobile!";
        
        /*---------------------------- Slider -------------------------------------*/
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        $scope.qualificacoes =              "Qualifications";
        
        $scope.linguagens =                 "Programming Languages";
        
        $scope.basico =                     "Basic";
        
        $scope.versionamento =              "Versioning";
        
        $scope.tecnologias =                "Technologies";
        
        $scope.teste =                      "Test";
        
        $scope.ferramentas =                "Tools";
        
        $scope.idiomas =                    "Languages";
        
        $scope.portugues =                  "Portuguese";
        
        $scope.ingles =                     "English";
        
        $scope.espanhol =                   "Spanish";
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        /*---------------------------- Experiencias -------------------------------*/
        
        $scope.informatica =                "Computing";
        
        $scope.periodo =                    "Period";
        
        $scope.ate =                        "until";
        
        $scope.cargo =                      "Function";
        
        $scope.estagiario =                 "Trainee";
        
        $scope.desenvolvimento =            "Development";
        
        $scope.area =                       "Role";
        
        $scope.participacoes =              "Contributions";
        
        $scope.projetos =                   "Projects";
        
        $scope.sisgepiTooltip =             "Intellectual Property Management System";
            
        $scope.desenvolvedor =              "Full Developer";
        
        /*---------------------------- Experiencias -------------------------------*/
        
        /*---------------------------- Formacao -----------------------------------*/
        
        $scope.catolica =                   "Universidade Católica de Brasília (Catholic University of Brasilia)";
        
        $scope.curso =                      "Course";
        
        $scope.sistemasInformacao =         "Information Systems";
        
        $scope.semestre =                   "Semester";
        
        /*---------------------------- Formacao -----------------------------------*/
        
        /*---------------------------- Certificados -------------------------------*/
        
        $scope.cursos =                     "Courses";
        
        $scope.certificado =                "Certificate";
        
        $scope.descricaoAngular =           "build powerful webapps";
        
        $scope.descricaoUnity =             "Mobile Games with Unity: Fun with the Game Engine";
        
        $scope.descricaoJava8 =             "Java 8: Take advantage of the new language features";
        
        $scope.descricaoTesteTDD =          "Test: TDD with Java";
        
        $scope.descricaoSelenium =          "Selenium: Your webapp tested all the way with java";
        
        $scope.descricaoDesignPatternsJava1="Design Patterns Java I: Good Programming Practices";
        
        $scope.descricaoWebHTML1 =          "HTML5 and CSS3 I: Your First Web Pages";
        
        $scope.descricaoWebHTML2 =          "HTML5 and CSS3 II: Leveling up your webpages";
        
        $scope.descricaoLinguagemcSharp =   "C# I: Language Fundamentals";
        
        $scope.descricaoLinguagemPHP =      "PHP e MySQL I: Fundamentals to build a Web System";
        
        $scope.descricaoJavascript =        "JavaScript: Programming on the web language";
        
        $scope.descricaoFlexbox =           "Flexbox: Positioning elements on the screen";
        
        $scope.descricaoUX1 =               "UX: what is user experience?";
        
        $scope.descricaoUX2 =               "UX Strategy: Diverging and tapering ideas";
        
        $scope.descricaoUX3 =               "UX Usability: Make your mobile life easier";
        
        $scope.descricaoUX4 =               "UX Research: Begin to understand the user";
        
        $scope.descricaoUX5 =               "UX Product: Monitor, measure and test your project";
        
        $scope.descricaoUXMyths =           "UX Myths: Frequent usability errors and good practices";
        
        $scope.descricaoMicrocopy =         "Microcopy: The influence of micro copy on the user experience";
            
        $scope.descricaoLess =              "LESS: Simple and productive CSS";
        
        $scope.descricaoIconografia =       "Course Iconography I: develop graphical representations from an identity";
            
        $scope.descricaoJavascriptECMA6 =   "Advanced JavaScript I: ES6, Object Orientation, and Project Patterns";
            
        $scope.descricaoTypescript1 =       "TypeScript part 1: Evolving your Javascript"
            
        $scope.descricaoAngular2Parte1 =    "Angular 2: webapps even more powerful part 1"
            
        $scope.descricaoAngular2Parte2 =    "Angular 2: webapps even more powerful part 2"
        
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Concepts and Fundamentals SWIFT";
        
        $scope.descricaoHackatruck =        "Presential Hackatruck Development SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Social Media";

        $scope.codigo =                     "Coding";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Created with";
        
        $scope.footer2 =                    "© 2017 Created and Developed by Breno Prata";
        
        /*---------------------------- Footer -------------------------------------*/
            
        }
        
        
    }
    
    function idiomaPortugues(){
        
        if($scope.inicio == "Início"){
           
            return;
            
        }else{
            
        if($scope.inicio != undefined){

            var $toastContent = $('<span class="valign-wrapper"><img style="height:40px;" src="resources/brazil.png">&nbsp&nbspPortuguês PT-BR</span>');

            Materialize.toast($toastContent, 1600, 'rounded');

        }
        
        /*---------------------------- Menu ---------------------------------------*/
        
        $scope.inicio =                     "Início";   
        
        $scope.logo =                       "Currículo - Breno Prata";
        
        $scope.experienciaMenu =            "Experiência";
        
        $scope.formacao =                   "Formação";
        
        $scope.certificados =               "Certificados";
        
        $scope.contato =                    "Contato";
        
        /*---------------------------- Menu ---------------------------------------*/
        
        /*---------------------------- Slider -------------------------------------*/
        
        $scope.desenvolvedor =              "Desenvolvedor Web";
        
        $scope.bemVindo =                   "Bem Vindo ao Meu Currículo!";
        
        $scope.anos =                       "Anos";
        
        $scope.resumo =                     "Resumo";
        
        $scope.cafe =                       "Adora café";
        
        $scope.apaixonadoHTML =             "Apaixonado por HTML";
        
        $scope.dica =                       "Quer uma dica?";
        
        $scope.tenteMobile =                "Tente usar esse site no mobile!";
        
        $scope.contatoSlider =              "Entre em Contato";
        
        /*---------------------------- Slider -------------------------------------*/
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        $scope.qualificacoes =              "Qualificações";
        
        $scope.linguagens =                 "Linguagens";
        
        $scope.basico =                     "Básico";
        
        $scope.versionamento =              "Versionamento";
        
        $scope.tecnologias =                "Tecnologias";
        
        $scope.teste =                      "Teste";
        
        $scope.ferramentas =                "Ferramentas";
        
        $scope.idiomas =                    "Idiomas";
        
        $scope.portugues =                  "Português";
        
        $scope.ingles =                     "Inglês";
        
        $scope.espanhol =                   "Espanhol";
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        /*---------------------------- Experiencias -------------------------------*/
        
        $scope.informatica =                "Informática";
        
        $scope.periodo =                    "Período";
        
        $scope.ate =                        "até";
        
        $scope.cargo =                      "Cargo";
        
        $scope.estagiario =                 "Estagiário";
        
        $scope.desenvolvimento =            "Desenvolvimento";
        
        $scope.area =                       "Área";
        
        $scope.participacoes =              "Contribuições";
        
        $scope.projetos =                   "Projetos";
            
        $scope.desenvolvedor =              "Desenvolvedor Pleno";
        
        
        /*---------------------------- Experiencias -------------------------------*/
        
        /*---------------------------- Formacao -----------------------------------*/
        
        $scope.catolica =                   "Universidade Católica de Brasília";
        
        $scope.curso =                      "Curso";
        
        $scope.sistemasInformacao =         "Sistemas da Informação";
        
        $scope.semestre =                   "Semestre";
        
        /*---------------------------- Formacao -----------------------------------*/
        
        /*---------------------------- Certificados -------------------------------*/
        
        $scope.cursos =                     "Cursos";
        
        $scope.certificado =                "Certificado";
        
        $scope.descricaoAngular =           "crie webapps poderosas";
        
        $scope.descricaoUnity =             "Jogos mobile com Unity: Diversão com a Game Engine";
        
        $scope.descricaoJava8 =             "Java 8: Tire proveito dos novos recursos da linguagem";
        
        $scope.descricaoTesteTDD =          "Testes: TDD com Java";
        
        $scope.descricaoSelenium =          "Selenium: Sua webapp testada de ponta a ponta em java";
        
        $scope.descricaoDesignPatternsJava1="Design Patterns Java I: Boas práticas de programação";
        
        $scope.descricaoWebHTML1 =          "HTML5 e CSS3 I: Suas primeiras páginas da Web";
        
        $scope.descricaoWebHTML2 =          "HTML5 e CSS3 II: Turbinando as suas páginas";
        
        $scope.descricaoLinguagemcSharp =   "C# I: Fundamentos da linguagem";
        
        $scope.descricaoLinguagemPHP =      "PHP e MySQL I: Fundamentos para criar um sistema na Web";
        
        $scope.descricaoJavascript =        "JavaScript: Programando na linguagem da web";
        
        $scope.descricaoFlexbox =           "Flexbox: Posicione elementos na tela";
        
        $scope.descricaoUX1 =               "UX: o que é experiência de usuário";
        
        $scope.descricaoUX2 =               "UX Strategy: divergindo e afunilando ideias";
        
        $scope.descricaoUX3 =               "UX Usability: facilite a vida do seu usuário no mobile";
        
        $scope.descricaoUX4 =               "UX Research: Comece a entender o seu usuário";
        
        $scope.descricaoUX5 =               "UX Produto: monitore, mensure e teste o seu projeto";
            
        $scope.descricaoUXMyths =           "UX Mitos: Os erros frequentes de usabilidade e as boas práticas";
            
        $scope.descricaoLess =              "LESS: CSS simples e produtivo";
        
        $scope.descricaoIconografia =       "Curso Iconografia I: desenvolva representações gráficas a partir de uma identidade";
        
        $scope.descricaoMicrocopy =         "Microcopy: a influência do micro copy na experiência do usuario";
            
        $scope.descricaoJavascriptECMA6 =   "JavaScript avançado I: ES6, orientação a objetos e padrões de projetos"
            
        $scope.descricaoTypescript1 =       "TypeScript parte 1: Evoluindo seu Javascript"
            
        $scope.descricaoAngular2Parte1 =    "Angular 2: webapps ainda mais poderosas parte 1"
        
        $scope.descricaoAngular2Parte2 =    "Angular 2: webapps ainda mais poderosas parte 2"
            
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Conceitos e Fundamentos SWIFT";
        
        $scope.descricaoHackatruck =        "Presencial Hackatruck Desenvolvimento SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Redes Sociais";

        $scope.codigo =                     "Código";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Desenvolvido com";
        
        $scope.footer2 =                    "© 2017 Criado e Desenvolvido por Breno Prata";
        
        /*---------------------------- Footer -------------------------------------*/
            
        }
        
    }
    
    function idiomaEspanhol(){
        
        $scope.logo = "Curriculum ES - Breno Prata";     
        
    }
    
});