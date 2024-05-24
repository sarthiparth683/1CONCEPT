let HUKUMUAvgScore
  
function HUKUMUScoreCheck(marks,cutOff){
    return new Promise((res,rej)=>{
         HUKUMUAvgScore = marks.reduce((sum,mark)=>{
            return sum+mark
        },0) / marks.length
        setTimeout(()=>{
            if(HUKUMUAvgScore>=cutOff){
                res(HUKUMUAvgScore)
            }
            else{
                rej("Sorry you haven't cleared the HUKUMU round.")
            }
        },2000)
    })
}
let HUKUMUScore = [60,75,82,90,95]
let HUKUMUcutoff = 65

HUKUMUScoreCheck(HUKUMUScore,HUKUMUcutoff)
.then((AvgScore)=>{
    console.log(  ` Congratulations! Your average score of Hukumu Interview is ${AvgScore}, which is greater than or equal to the cutoff score of ${HUKUMUcutoff}. ` 
)
})
.catch((error)=>{
    console.log(error)
})