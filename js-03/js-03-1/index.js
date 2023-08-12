function Namber( Namber1=0 , Operator ,  Namber2=0 ){
    if(!isNaN( Namber1 , Namber2 )){
        switch ( Operator ){

             case '+' :
                return ( Namber1 + Namber2)

             case '-' :
                 return ( Namber1 - Namber2)

             case '/' :
                 return ( Namber1 / Namber2) 
                    
             case '*' :
                 return ( Namber1 * Namber2)
        
                 default:
                    return(" please check the Operator !!! ")
        } 
    }
   return (" ERORR NAMBER !!! ")
}

const Namber1 = + prompt ("Please enter NAMBER1")
const Operator = prompt ("Please enter OPERATOR")
const Namber2 = + prompt ("Please enter NAMBER2")

console.log(Namber(Namber1 , Operator , Namber2))