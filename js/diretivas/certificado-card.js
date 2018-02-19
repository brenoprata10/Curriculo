app.directive("certificadoCard", function () {

    return {

        restrict: "AE",

        templateUrl: "js/diretivas/certificadoCard.html",

        scope: {

            slide: "@",
            image: "@",
            descricao: "@",
            urlcertificado: "@",
            certificado: "@"
        },

        link: function($scope) {
            $scope.abrirCertificado = function(urlcertificado) {
                console.log(urlcertificado);
                window.open(urlcertificado.toString());
            }
        }

    };

});