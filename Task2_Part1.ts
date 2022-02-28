const data= require('./data.json')
const Percentile=require('percentile')


function getPercentiles(){
    const scores=data.sort((a,b)=>{
        return a.score-b.score
    }).map((e)=>{return e.score})
    const tenThPercnetile=Percentile(10,scores)
    const fiftyThPercnetile=Percentile(50,scores)
    const ninetyThPercnetile=Percentile(90,scores)
    return {tenThPercnetile,fiftyThPercnetile,ninetyThPercnetile}
}
console.log(getPercentiles())




