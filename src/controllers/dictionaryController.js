const http = require("https");
const wordModel=require("../models/wordModel")


const createWord =  async function(req,res){ 
  try{
  let newWord = req.query.word
  console.log(word)
  let wordMeaning  = oxford.wordMeaning(newWord)
  let wordToAddInDb ={
      newWord:newWord,
      wordMeaning:wordMeaning,
  }

  let addWord = await wordModel.create(wordToAddInDb)


  res.status(200).send({status:true,data:addWord})

}catch(error){
  return res.status(500).send({status:false,message:error.message})
}
}


const app_id = "57abe9dd"; // insert your APP Id
const app_key = "0733f0b75252d8801dd8c75e92349840"; // insert your APP Key
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";

let getWord= async function(req,res){
try{
const options = {
  host: 'od-api.oxforddictionaries.com',
  port: '443',
  path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
  method: "GET",
  headers: {
    'app_id': app_id,
    'app_key': app_key
  },

  url:'	https://od-api.oxforddictionaries.com/api/v2',
};

http.get(options, (resp) => {
    let body = '';
    resp.on('data', (d) => {
        body += d;
    });
    resp.on('end', () => {
        let parsed = JSON.stringify(body);

        console.log(parsed);
    });
});
let findWord=await wordModel.find(options)
return res.status(200).send({data:findWord})
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}
module.exports.getWord=getWord;
module.exports.createWord=createWord;


