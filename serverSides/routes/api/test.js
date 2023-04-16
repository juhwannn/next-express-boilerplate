console.log(`${__filename}:1`)

import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  console.log('test hello')
})

module.exports = router
