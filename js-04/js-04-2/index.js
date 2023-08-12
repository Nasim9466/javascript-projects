 function searchwords ( Sentence , text){
   if(Sentence.includes(text)){
       return "successful!!"
    }else{
      return "Unsuccessful!!"
    }
    let Sen = "Hello, I am artificial intelligence. How can I help you?"
     let tex = " artificial intelligence"
     console.log(searchwords(Sen , tex))
 }
//function searchwords ( Sentence , text){
//   if(Sentence.includes(text)){
//        return "successful!!"
//    }else{
//        return "Unsuccessful!!"
//   }
//  console.log(searchwords(Sentence , text ))
//}