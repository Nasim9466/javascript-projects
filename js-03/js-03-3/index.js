function Score(Score1=0 , Score2=0 , Score3=0 , Score4=0 , Score5=0){
    if(!isNaN(Score1 + Score2 + Score3 + Score4 + Score5)){
        return Score1 + Score2 + Score3 + Score4 + Score5
     }
    
}

const Score1 = +prompt ("enter Score1")
const Score2 = +prompt ("enter Score2")
const Score3 = +prompt ("enter Score3")
const Score4 = +prompt ("enter Score4")
const Score5 = +prompt ("enter Score5")

const TotalScore = Score1 + Score2 + Score3 + Score4 + Score5
const AverageScore = TotalScore / 5
if(AverageScore < 12){
    console.log("Your average is not acceptable !!!")
}


    
