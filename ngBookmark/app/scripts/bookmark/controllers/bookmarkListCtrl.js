angular.module("ngBookmark.bookmark.controller")
 .controller('bookmarkListCtrl', ['$scope','bookmarks','Bookmark','$location', function ($scope,bookmarks,Bookmark,$location) {
 	 $scope.bookmarkList = bookmarks;

   $scope.$on('search:newSearchInfo',function(e, searchInfo) {
    var searchQuery = '{"bookmarkName" : {"$regex": "^'+searchInfo.bookmarkName+'" } }';
    $scope.bookmarkList = Bookmark.query({q : searchQuery });
   });

   $scope.newBookmark = function () {
    $location.url("/new-bookmark");
   }
 }]);