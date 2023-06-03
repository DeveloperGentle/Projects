import express from 'express'
import * as controllers from '../controllers/Projects.js'

const router = express.Router()

router.get('/',controllers.getProjects)
router.post('/',controllers.createProject)
router.patch('/:id',controllers.updateProject)
router.delete('/:id',controllers.terminateProject)

export default router

// const router = express.Router()

// router.get('/',getPosts)
// router.post('/',auth,createPost)
// router.patch('/:id',auth,updatePost)
// router.delete('/:id',auth,deletePost)
// router.patch('/:id/likePost',auth,likePost)
// export default router