import * as functions from "firebase-functions";
const Percentile=require('percentile')
const admin=require('firebase-admin')
admin.initilizeApp()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


function calculatePercentiles(){
    const data=admin.firestore().collection('scores').get()
    const scores=data.sort((a:any,b:any)=>{
        return a.score-b.score
    }).map((e:any)=>{return e.score})
    const tenThPercnetile=Percentile(10,scores)
    const fiftyThPercnetile=Percentile(50,scores)
    const ninetyThPercnetile=Percentile(90,scores)
    return {tenThPercnetile,fiftyThPercnetile,ninetyThPercnetile}
}
export const getPercentiles = functions.https.onRequest((request, response) => {
  response.send(JSON.stringify(calculatePercentiles()));
});
