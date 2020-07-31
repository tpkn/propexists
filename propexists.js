/*!
 * propexists, http://tpkn.me/
 */
function propexists(obj, property, options = {}){
   let result;

   if(typeof property !== 'string' && !Array.isArray(property)){
      throw new TypeError('Second argument should be a String or an Array!');
   }

   if(typeof obj !== 'object' || obj === null){
      return result;
   }
   

   let { value, fallback } = options;

   if(typeof property === 'string'){
      property = property.split('.');
   }

   for(let i = 0, len = property.length, end = len - 1; i < len; i++){
      obj = obj[property[i]];
      
      if(obj === null || typeof obj === 'undefined'){
         // Set default value if 'result' is null
         if(value && typeof fallback !== 'undefined'){
            result = fallback;
         }
         break;
      }

      if(i == end){
         if(value){
            result = obj;
         }else{
            result = true;
         }
      }
   }
   
   return result;
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = propexists;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return propexists;
      });
   }
}
