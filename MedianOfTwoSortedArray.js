let nums1 = [1, 3, 2, 4, 5];
let nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

   let arr1 = [...nums1, ...nums2];
   console.log(arr1);

   arr1.sort((a,b)=>(a-b));
   console.log(arr1);
   
   if (arr1.length % 2 == 1) {
     console.log(arr1[Math.floor(arr1.length / 2)]);
   } else {
     console.log(
       (arr1[(arr1.length / 2) -1] + arr1[arr1.length / 2 ]) / 2
     );
   }
