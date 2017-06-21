var app = angular.module("CurriculoApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "telaInicial.html"
  })
  .when("/experiencia", {
    templateUrl : "experiencia.html"
  })
  .when("/formacao", {
    templateUrl : "formacao.html"
  })
  .when("/contato", {
    templateUrl : "contato.html"
  })
  .when("/certificados", {
    templateUrl : "certificados.html"
  });
});