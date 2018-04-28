app.controller('TelaInicialCtrl',

function($scope) {           
    
    carregarTela();

    $scope.timeouts = [];
    
    $scope.idiomaIngles = function (){

        limparTimeouts();

        idiomaIngles();

        animarLabelBemVindo();
        
    }
    
    $scope.idiomaPortugues = function (){

        limparTimeouts();

        idiomaPortugues();

        animarLabelBemVindo();
        
    }
    
    $scope.idiomaEspanhol = function (){

        limparTimeouts();

        idiomaEspanhol();

        animarLabelBemVindo();
        
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
    
    $scope.carregarComponentes = function (){
        
        $(document).ready(function(){
            $('.slider').slider();
        });

        animarLabelBemVindo();
    }

    $scope.abrirCurriculo = function () {
        window.open('resources/Curriculo-BrenoPrata.pdf');
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

        var userLang = navigator.language || navigator.userLanguage;

        switch(userLang.substr(0,2)) {
            case 'en':
                idiomaIngles();
                break;
            case 'pt':
                idiomaPortugues();
                break;
            case 'es':
                idiomaEspanhol();
                break;
            default:
                idiomaPortugues();
        }

        $(".drag-target").on("swipeleft", function () {
              $("#sidenav-overlay").trigger("click");
            });
        
        $(document).ready(function(){
            $('.slider').slider();
            $('.parallax').parallax();
            $('.tooltipped').tooltip({delay: 50});
            $(document).on('click', '.itemLinhaInferior', function () {
                window.scrollTo(0,0);
            });
        });

        $(document).ready(function(){
            $('.fixed-action-btn').floatingActionButton();
        });

    }

    function animarLabelBemVindo() {
        var label = document.getElementById("bem-vindo");
        if (!label) {
            return;
        }
        var labelContrucao = $scope.bemVindo;
        var totalCaracteres = labelContrucao.split('').length * 75;
        label.innerHTML = '';
        executarAnimacao(label, labelContrucao);
        $scope.timeouts.push(setTimeout(() => {
        escreverPalavras($scope.bemVindoSegundaParte, labelContrucao, label, totalCaracteres, totalCaracteres);
        escreverPalavras($scope.bemVindoTerceiraParte, labelContrucao, label, totalCaracteres + 4500, totalCaracteres);
        }, totalCaracteres));
    }

    function escreverPalavras (palavra, labelContrucao, label, tempoDelecao, tempoInserir) {
        $scope.timeouts.push(setTimeout(() => {
            animacaoApagarOrdenado(label);
            $scope.timeouts.push(setTimeout(() => {
                labelContrucao = ` ${palavra}`;
                executarAnimacao(label, labelContrucao);
            }, tempoInserir));
        }, tempoDelecao));
    }

    function animacaoApagarOrdenado(label) {
        var arrayPalavras = label.innerHTML.split(' ');
        var arrayLimiteDelecao = `${arrayPalavras[0]} ${arrayPalavras[1]}`;
        label.innerHTML.split('').forEach((character, cont)=> {
            $scope.timeouts.push(setTimeout(() => {
                if (arrayLimiteDelecao.length === label.innerHTML.length) {
                    return;
                }
                label.innerHTML = label.innerHTML.split('').splice(0, label.innerHTML.length - 1).join('');
            }, 75 * cont));
        })
    }

    function executarAnimacao(label, labelContrucao) {
        labelContrucao.split('').forEach((character, i) => {
            $scope.timeouts.push(setTimeout(() => {
                label.innerHTML = label.innerHTML + labelContrucao[i];
            }, 75 * i));
        });
    }

    function limparTimeouts() {
        for (var i = 0; i < 500; i++) {
            clearTimeout(i);
        }

        document.getElementById('bem-vindo').innerHTML = '';
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
        
        $scope.formacao =                   "Education";
        
        $scope.certificados =               "Certificates";
        
        $scope.contato =                    "Contact";
        
        /*---------------------------- Menu ---------------------------------------*/
        
        /*---------------------------- Slider -------------------------------------*/
        
        $scope.desenvolvedor =              "Web Developer";
        
        $scope.bemVindo =                   "Welcome to My Curriculum!";

        $scope.bemVindoSegundaParte =       "My Career!";

        $scope.bemVindoTerceiraParte =      " My Curriculum!";
        
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
        
        $scope.estagiario =                 "Intern";
        
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
        
        $scope.descricaoAngular =           "Build powerful webapps";
        
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
            
        $scope.descricaoTypescript1 =       "TypeScript part 1: Evolving your Javascript";
            
        $scope.descricaoAngular2Parte1 =    "Angular 2: webapps even more powerful part 1";
            
        $scope.descricaoAngular2Parte2 =    "Angular 2: webapps even more powerful part 2";

        $scope.descricaoIonic2Parte1 =      "Ionic 2 part 1: Mobile hybrid applications even more powerful";

        $scope.descricaoIonic2Parte2 =      "Ionic 2 part 2: Mobile hybrid applications even more powerful";
        
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Concepts and Fundamentals SWIFT";
        
        $scope.descricaoHackatruck =        "Presential Hackatruck Development SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Social Media";

        $scope.codigo =                     "Coding";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Created with";
        
        $scope.footer2 =                    "© 2018 Created and Developed by Breno Prata";
        
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

        $scope.bemVindoSegundaParte =       "à Minha Carreira!";

        $scope.bemVindoTerceiraParte =      "ao Meu Currículo!";
        
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
        
        $scope.descricaoAngular =           "Crie webapps poderosas";
        
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
            
        $scope.descricaoTypescript1 =       "TypeScript parte 1: Evoluindo seu Javascript";
            
        $scope.descricaoAngular2Parte1 =    "Angular 2: webapps ainda mais poderosas parte 1";
        
        $scope.descricaoAngular2Parte2 =    "Angular 2: webapps ainda mais poderosas parte 2";

        $scope.descricaoIonic2Parte1 =      "Ionic 2 parte 1: Aplicações híbridas mobile ainda mais poderosas";

        $scope.descricaoIonic2Parte2 =      "Ionic 2 parte 2: Aplicações híbridas mobile ainda mais poderosas";
            
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Conceitos e Fundamentos SWIFT";
        
        $scope.descricaoHackatruck =        "Presencial Hackatruck Desenvolvimento SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Redes Sociais";

        $scope.codigo =                     "Código";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Desenvolvido com";
        
        $scope.footer2 =                    "© 2018 Criado e Desenvolvido por Breno Prata";
        
        /*---------------------------- Footer -------------------------------------*/

        }
        
    }
    
    function idiomaEspanhol(){

        if($scope.inicio == "Inicio "){

            return;

        }else{

            if($scope.inicio != undefined){

                var $toastContent = $('<span class="valign-wrapper"><img style="height:40px;" src="resources/spain.png">&nbsp&nbsp Espanhol</span>');

                Materialize.toast($toastContent, 1600, 'rounded');

            }

            /*---------------------------- Menu ---------------------------------------*/

            $scope.inicio =                     "Inicio ";

            $scope.logo =                       "Currículo - Breno Prata";

            $scope.experienciaMenu =            "Experiencia";

            $scope.formacao =                   "Formación";

            $scope.certificados =               "Certificados";

            $scope.contato =                    "Contacto";

            /*---------------------------- Menu ---------------------------------------*/

            /*---------------------------- Slider -------------------------------------*/

            $scope.desenvolvedor =              "Desarrollador Web";

            $scope.bemVindo =                   "Bienvenido a Mi Currículo!";

            $scope.bemVindoSegundaParte =       " Mi Carrera!";

            $scope.bemVindoTerceiraParte =      " Mi Currículo!";

            $scope.anos =                       "Años";

            $scope.resumo =                     "Resumen";

            $scope.cafe =                       "Adora café";

            $scope.apaixonadoHTML =             "Enamorado de HTML";

            $scope.dica =                       "¿Quieres una sugerencia?";

            $scope.tenteMobile =                "Intenta usar este sitio en el móvil!";

            $scope.contatoSlider =              "Entre en contacto";

            /*---------------------------- Slider -------------------------------------*/

            /*---------------------------- Tela Inicial -------------------------------*/

            $scope.qualificacoes =              "Calificaciones";

            $scope.linguagens =                 "Lenguajes";

            $scope.basico =                     "Básico";

            $scope.versionamento =              "Versionamento";

            $scope.tecnologias =                "Tecnologías";

            $scope.teste =                      "Teste";

            $scope.ferramentas =                "Herramientas";

            $scope.idiomas =                    "Idiomas";

            $scope.portugues =                  "Português";

            $scope.ingles =                     "Inglês";

            $scope.espanhol =                   "Espanhol";

            /*---------------------------- Tela Inicial -------------------------------*/

            /*---------------------------- Experiencias -------------------------------*/

            $scope.informatica =                "Informática";

            $scope.periodo =                    "Período";

            $scope.ate =                        "hasta";

            $scope.cargo =                      "Cargo";

            $scope.estagiario =                 "Becario";

            $scope.desenvolvimento =            "Desarrollo";

            $scope.area =                       "Área";

            $scope.participacoes =              "Contribuciones";

            $scope.projetos =                   "Proyectos";

            $scope.desenvolvedor =              "Desarrollador Pleno";


            /*---------------------------- Experiencias -------------------------------*/

            /*---------------------------- Formacao -----------------------------------*/

            $scope.catolica =                   "Universidad Católica de Brasília";

            $scope.curso =                      "Curso";

            $scope.sistemasInformacao =         "Sistemas de la Información";

            $scope.semestre =                   "Semestre";

            /*---------------------------- Formacao -----------------------------------*/

            /*---------------------------- Certificados -------------------------------*/

            $scope.cursos =                     "Cursos";

            $scope.certificado =                "Certificado";

            $scope.descricaoAngular =           "Crea webapps poderosas";

            $scope.descricaoUnity =             "Juegos móviles con Unity: Diversión con Game Engine";

            $scope.descricaoJava8 =             "Java 8: Aproveche los nuevos recursos del lenguaje";

            $scope.descricaoTesteTDD =          "Testes: TDD con Java";

            $scope.descricaoSelenium =          "Selenium: Su webapp probada de extremo a extremo en java";

            $scope.descricaoDesignPatternsJava1="Design Patterns Java I: Buenas prácticas de programación";

            $scope.descricaoWebHTML1 =          "HTML5 y CSS3 I: sus primeras páginas web";

            $scope.descricaoWebHTML2 =          "HTML5 y CSS3 II: Turbinando sus páginas";

            $scope.descricaoLinguagemcSharp =   "C# I: Fundamentos del lenguaje";

            $scope.descricaoLinguagemPHP =      "PHP y MySQL I: Fundamentos para crear un sistema en la Web";

            $scope.descricaoJavascript =        "JavaScript: Programando en el lenguaje de la web";

            $scope.descricaoFlexbox =           "Flexbox: Coloque elementos en la pantalla";

            $scope.descricaoUX1 =               "UX: lo que es experiencia de usuario";

            $scope.descricaoUX2 =               "UX Strategy: divergiendo y hundiendo ideas";

            $scope.descricaoUX3 =               "UX Usabilidad: facilite la vida de su usuario en el móvil";

            $scope.descricaoUX4 =               "UX Research: Comience a entender a su usuario";

            $scope.descricaoUX5 =               "UX Producto: monitoree, muestre y pruebe su proyecto";

            $scope.descricaoUXMyths =           "UX Mitos: Los errores frecuentes de usabilidad y las buenas prácticas";

            $scope.descricaoLess =              "LESS: CSS simple y productivo";

            $scope.descricaoIconografia =       "Curso Iconografía I: desarrolle representaciones gráficas a partir de una identidad";

            $scope.descricaoMicrocopy =         "Microcopy: la influencia del micro copy en la experiencia del usuario";

            $scope.descricaoJavascriptECMA6 =   "JavaScript avanzado I: ES6, orientación a objetos y patrones de proyectos"

            $scope.descricaoTypescript1 =       "TypeScript parte 1: Evolución de su Javascript";

            $scope.descricaoAngular2Parte1 =    "Angular 2: webapps aún más poderosos parte 1";

            $scope.descricaoAngular2Parte2 =    "Angular 2: webapps aún más poderosos parte 2";

            $scope.descricaoIonic2Parte1 =      "Ionic 2 parte 1: Aplicaciones híbridas móviles aún más poderosas";

            $scope.descricaoIonic2Parte2 =      "Ionic 2 parte 2: Aplicaciones híbridas móviles aún más poderosas";

            $scope.descricaoEADHackatruck =     "EAD Hackatruck - Conceptos y Fundamentos SWIFT";

            $scope.descricaoHackatruck =        "Presencial Hackatruck Desarrollo SWIFT";

            /*---------------------------- Certificados -------------------------------*/

            /*---------------------------- Contato ------------------------------------*/

            $scope.redesSociais =               "Redes Sociais";

            $scope.codigo =                     "Código";

            /*---------------------------- Contato ------------------------------------*/

            /*---------------------------- Footer -------------------------------------*/

            $scope.footer =                     "Desarrollado con";

            $scope.footer2 =                    "© 2018 Creado y Desarrollado por Breno Plata";

            /*---------------------------- Footer -------------------------------------*/

        }
        
    }
    
});