(function(){
    'use strict';

    angular
        .module('social_djangular.posts.controller')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['$scope'];

    function PostsController($scope){
        var postsCtl = this;

        postsCtl.columns = [];

        activate();


        function activate(){
            $scope.$watchCollection(function () { return $scope.posts; }, render);
            $scope.$watch(function () { return $(window).width(); }, render);
        }

        function calculateNumberOfColumns() {
            var width = $(window).width();

            if (width >= 1200) {
                return 4;
            } else if (width >= 992) {
                return 3;
            } else if (width >= 768) {
                return 2;
            } else {
                return 1;
            }
        }

        function approximateShortestColumn() {
            var scores = postsCtl.columns.map(columnMapFn);

            return scores.indexOf(Math.min.apply(this, scores));


            /**
            * @name columnMapFn
            * @desc A map function for scoring column heights
            * @returns The approximately normalized height of a given column
            */
            function columnMapFn(column) {
                var lengths = column.map(function (element) {
                    return element.content.length;
                });

                return lengths.reduce(sum, 0) * column.length;
            }


            /**
            * @name sum
            * @desc Sums two numbers
            * @params {Number} m The first number to be summed
            * @params {Number} n The second number to be summed
            * @returns The sum of two numbers
            */
            function sum(m, n) {
                return m + n;
            }
        }

        function render(current, original) {
            if (current !== original) {
                postsCtl.columns = [];

                for (var i = 0; i < calculateNumberOfColumns(); ++i) {
                    postsCtl.columns.push([]);
                }

                for (var i = 0; i < current.length; ++i) {
                    var column = approximateShortestColumn();
                    postsCtl.columns[column].push(current[i]);
                }

            }
        }

    }
})();
