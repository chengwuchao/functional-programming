
// 判断事务是否的存在
function existy(x) {
   return x != null;
}


function truthy(x) {
    retrun (x !== false) && existy(x);
}