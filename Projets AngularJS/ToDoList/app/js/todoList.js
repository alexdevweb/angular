// js/todoList.js
'use strict';


/**
 * D�claration de l'application demoApp
 */
/*var demoApp = angular.module('demoApp', [
    // D�pendances du "module"
    'todoList',
    'ngAnimate'
]);*/

/**
 * D�claration du module todoList
 */
var todoList = angular.module('todoList',['ngAnimate']);


/**
 * Contr�leur de l'application "Todo List" d�crite dans le chapitre "La logique d'AngularJS".
 */
todoList.controller('todoCtrl', ['$scope',
    function ($scope) {

        // Pour manipuler plus simplement les todos au sein du contr�leur
        // On initialise les todos avec un tableau vide : []
        var todos = $scope.todos = [
            {
                title: 'bla',
                completed: false
            }
        ];

        // Ajouter un todo
        $scope.addTodo = function () {
            // .trim() permet de supprimer les espaces inutiles
            // en d�but et fin d'une cha�ne de caract�res
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                // �viter les todos vides
                return;
            }
            todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                completed: false
            });
            // R�initialisation de la variable newTodo
            $scope.newTodo = '';
        };

        // Enlever un todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        // Cocher / D�cocher tous les todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = completed;
            });
        };

        // Enlever tous les todos coch�s
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };
    }
]);