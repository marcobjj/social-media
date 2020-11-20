const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById
  } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/')
.get(getAllThoughts);

router.route('/:thoughtId')
.get(getThoughtById)

router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeThought);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;