import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    const { email, password } = req.body;
    
    // validation
    if (!email || typeof email !== 'string') {
        res.status(400).send('Provide a valid email address');
    }

    // Create new user

});

export { router as signUpRouter };