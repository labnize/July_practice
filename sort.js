function sort(arr){
  for(i=0; i<arr.length-1; i++) {
      for(j=i; j< arr.length; j++) {
          if(arr[i] > arr[j]) {
              var temp;
              temp = arr[i];
              arr[i] = arr[j];
              arr[j]= temp;
          }
      }
  }
  return arr;
}
sort([4,3,2,1]);


function sort( arr ) {
  var len=arr.length;
  var temp;
    while(len>0){
      for(j=0;j<len-1;j++){
                      if(arr[j]>arr[j+1]){
                          temp=arr[j];
                          arr[j]=arr[j+1];
                          arr[j+1]=temp;
                      }
                  }
                  len--;
       }
  return arr;
  }
  sort([4,3,2,1]);
  [4,3,2,1].sort((a, b) => {
      return a - b;
  })