/*!
 * propexists, http://tpkn.me/
 */
function propexists(obj, property, options){
   if(typeof obj !== 'object' || obj === null){
      return false;
   }
   
   if(typeof property !== 'string' && !Array.isArray(property)){
      throw new TypeError('Second argument should be a String or an Array!');
   }

   var level = obj;
   var props = property;
   var result = true;
   
   options = options || {};

   if(typeof property === 'string'){
      props = property.split('.');
   }

   for(var i = 0, len = props.length; i < len; i++){
      level = level[props[i]];

      if(level === null || typeof level === 'undefined'){
         result = false;
         break;
      }
   }

   if(options.value){
      result = level;
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