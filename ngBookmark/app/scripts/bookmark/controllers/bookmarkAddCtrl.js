angular.module("ngBookmark.bookmark.controller")
 .controller('bookmarkAddCtrl', ['$scope','Bookmark','$location', function ($scope,Bookmark,$location) {
  $scope.save = function (bookmark) {
   var newBookmark = new Bookmark();

   angular.extend(newBookmark, bookmark);
   
   newBookmark.$save(function () {
     $location.url("/bookmarks");
   });
  };
 }]);