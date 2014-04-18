angular.module("ngBookmark.bookmark.controller")
 .controller('bookmarkDetailCtrl', ['$scope','bookmark','$route','Bookmark','$location', function ($scope,bookmark,$route,Bookmark,$location) {
  $scope.bookmark = bookmark;

  $scope.edit = function (){
   $scope.isEditing = true;
  };

  $scope.save = function (bookmark) {
   var updatePormise = Bookmark.update({
    bookmarkId : bookmark["_id"].$oid
   },angular.extend({}, bookmark)).$promise;
   
   updatePormise.then(function () {
    $route.reload();
   });
  };

  $scope.cancel = function () {
   $route.reload();
  };

  $scope.delete = function () {
    var deletePromise = Bookmark.delete({
     bookmarkId : bookmark["_id"].$oid
    }).$promise;

    deletePromise.then(function () {
     $location.url("/bookmarks");
    });
  };
 }]);