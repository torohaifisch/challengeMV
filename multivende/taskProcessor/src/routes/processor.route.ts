import express from 'express'
const router = express.Router()
import { processFile } from '../services/processing/processor.controller'
/* POST programming language */
router.post('/uploadFile', processFile)

module.exports = router
