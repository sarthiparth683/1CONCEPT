function unitMovementCheck(averageCodingScore,averageHukumuScore,cutoffScore){
    return new Promise((resolve,reject)=>{
        AvgHumkumuCoding = averageCodingScore + averageHukumuScore

        setTimeout(()=>{
            if(AvgHumkumuCoding>=cutoffScore){
                resolve(AvgHumkumuCoding)
            }

            else{
                reject("Sorry you haven't cleared the final cutoff.")
            }
        },2000)
    })
}
let totalCutoff = 100

unitMovementCheck(CodingAvgMarks,HUKUMUAvgScore,totalCutoff)
.then((AvgHumkumuCoding)=>{
    console.log(  `  Congratulations! Your average score of both Coding & Hukumu is ${AvgHumkumuCoding}, which is greater than or equal to the cutoff score of ${totalCutoff}. `)
})
.catch((error)=>{
    console.log(error)
})