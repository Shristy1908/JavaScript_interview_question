var nums=[1,1,0,0,1,0,1,1,1,0];

   var maxones = 0;
   curones = 0;
   for (var i = 0; i < nums.length; i++) {
     if (nums[i] == 1) {
       curones++;
       if (curones > maxones) {
         maxones = curones;
       }
     }
     if (nums[i] == 0) {
       if (curones > maxones) {
         maxones = curones;
       }
       curones = 0;
     }
   }
   console.log(maxones);