var todoList = [
 { done : true, title : "AngularJS 독서"},
 { done : false, title : "AngularJS 공부하기"},
 { done : false, title : "개인 프로젝트 구성"}
];

function todoCtrl ($scope) {
 $scope.appName = 'AngularJS TODO APP';
 //초기 할 일 목록 설정
 $scope.todoList = todoList;
 //새로운 할 일 추가
 $scope.addNewTodo = function(newTitle) {
  todoList.push({done:false, title:newTitle});
  $scope.newTitle='';
 };
 //완료한 일 삭제
 $scope.archive = function(){
  for (var i = $scope.todoList.length - 1; i >= 0; i--) {
   if($scope.todoList[i].done){
    $scope.todoList.splice(i,1);
   }
  };
 };
 //남은 할 일 수 계산
 $scope.remain = function() {
  var remainCount=0;
  angular.forEach($scope.todoList, function(value, key){
   if(value.done === false){
    remainCount++;
   }
  });
  return remainCount;
 };

}