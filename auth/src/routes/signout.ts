import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('Hello from User SignOut');
});

export { router as signOutRouter };