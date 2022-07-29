const express=require('express')
const router=express.Router()
const dictionaryController=('../controllers/dictionaryController')

router.get("/api/v2/entries/{source_lang}/{word_id}", dictionaryController.getWord)


module.exports=router;