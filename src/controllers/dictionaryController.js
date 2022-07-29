const http = require("https");

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
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}
module.exports.getWord=getWord;


