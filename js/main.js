var app = angular.module("CurriculoApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'telaInicial',
    url: '/',
    templateUrl : "telaInicial.html"
  })
  .state({
    name: 'experiencia',
    url: '/experiencia',
    templateUrl : "experiencia.html"
  })
  .state({
    name: 'formacao',
    url: '/formacao',
    templateUrl : "formacao.html"
  })
  .state({
    name: 'contato',
    url: '/contato',
    templateUrl : "contato.html"
  })
  .state({
    name: 'certificados',
    url: '/certificados',
    templateUrl : "certificados.html"
  })
  .state('/', {
      name: 'telaInicial',
      url: '/',
      templateUrl : "telaInicial.html"
  });
  $urlRouterProvider.otherwise('/');
});