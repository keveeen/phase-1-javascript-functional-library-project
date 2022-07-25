function myEach(collection, callback){
   
   let collectArray = (collection instanceof Array) ? collection : Object.values(collection)

// if (typeof collection === Object){
//     collectArray = Object.values(collection)
//    }
   
//    else {

//     collectArray = collection
//    }

   for (let i = 0; i < collectArray.length; i++){

       callback(collectArray[i])
   }

   return collection

}

function myMap(collection, callback){
   
    let collectArray = (collection instanceof Array) ? collection : Object.values(collection)
 
 // if (typeof collection === Object){
 //     collectArray = Object.values(collection)
 //    }
    
 //    else {
 
 //     collectArray = collection
 //    }
 
    for (let i = 0; i < collectArray.length; i++){
 
        callback(collectArray[i])
    }
 
    return collection
 
 }
 