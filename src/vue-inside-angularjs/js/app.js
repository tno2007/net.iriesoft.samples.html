const appComponent = Vue.component("AppComponent", {
  data() {
    return {
      count: 0,
    };
  },
  template: "#x-parent-template",
});

const app = angular
  .module("designer", ["ngVue"])
  .controller("SimpleController", function ($scope) {
    $scope.name = "Lyall";
  });

app.value("appComponent", appComponent);
