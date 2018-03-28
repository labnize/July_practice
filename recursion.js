var arrTest = ((arr) => {
  arr.sort((a, b) => {
     return b.pid - a.pid;
  });
  var tempArr = [];
  var len = arr.length;
  for(i=0; i<len; i++) {
      var temp = arr.shift();
      var index = arr.findIndex(x => x.id === temp.pid);
      if(index === -1) {
          tempArr.push(temp);
      } else {
          if(!arr[index].children) {
              arr[index].children = [];
          }
          arr[index].children.push(temp);
      }
      

  }
  return tempArr;
});

var a = [
{
  id: 1,
  pid: -1,
  name: 1
},
{
  id: 2,
  pid: -1,
  name: 2
},
{
  id: 3,
  pid: 1,
  name: 3
},
{
  id: 4,
  pid: 3,
  name: 4,
},
{
  id: 5,
  pid: 4,
  name: 5
}
];
arrTest(a);




var arrayReverTree= (arr, pid=-1) => {
  var temp = arr.filter(x => x.pid === pid);
  return temp.map((x) => {
      x.children = arrayReverTree(arr, x.id);
      return x;
  });
}
var a = [
{
  id: 1,
  pid: -1,
  name: 1
},
{
  id: 2,
  pid: -1,
  name: 2
},
{
  id: 3,
  pid: 1,
  name: 3
},
{
  id: 4,
  pid: 3,
  name: 4,
},
{
  id: 5,
  pid: 4,
  name: 5
}
];

arrayReverTree(a);