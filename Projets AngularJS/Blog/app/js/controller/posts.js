/**
 * Created by learning1 on 23/07/2015.
 */

myApp.controller('postsCtrl', function($scope, postFactory)
{
    $scope.loading = true;
    $scope.posts = postFactory.getPosts().then(function(posts){
        $scope.loading = false;
        $scope.posts = posts;
    }, function(msg){
        alert(msg);
    })
});