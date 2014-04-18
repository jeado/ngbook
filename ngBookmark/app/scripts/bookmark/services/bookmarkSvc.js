angular.module("ngBookmark.bookmark.service")
 .value('mogolabApiKey','50728d46e4b088be4c29ea02') //개인 API-KEY로 변경해야 함
 .factory('Bookmark', ['$resource','mogolabApiKey',function ($resource,mogolabApiKey) {
  var bookmarkResource = $resource('https://api.mongolab.com/api/1/databases/sample/collections/bookmarks/:bookmarkId?apiKey=:apiKey',{
   apiKey: mogolabApiKey
  },{
   'update' : {
    method: 'PUT'
   }
  });

  return bookmarkResource;
 }]);