/**
 * Created by learning1 on 23/07/2015.
 */

myApp.controller('commentsCtrl', function($scope, postFactory, $routeParams){

    $scope.loading = true;
    $scope.newComment = {};

    postFactory.getPost($routeParams.id).then(function(post){
        $scope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function(msg){
        alert(msg);
    })

    $scope.addComment = function(){
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};
    }
});