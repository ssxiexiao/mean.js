(function(app) {
  class HomeController {
    constructor($scope) {
      let vm = this;
      vm.data = {};
      vm.data.name = 'MEAN.JS';
    }
  }
  angular.module(app.applicationModuleName)
  .controller('HomeController', ['$scope', HomeController]);

}(ApplicationConfiguration));
