const {Router} = require('express');
const router = Router();

const testUser = [
    {
        name: 'Annabell',
        age: 1000
    },
    {
        name: 'Nun',
        age: 2000
    }
]
router.get('/', (req,res) => {
    return res.render('home', {
        users: testUser
    });
});

router.post('/name/post', (req, res) => {
    return res.json({msg: "Done"});
});

router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.get('/login', (req, res) => {
    return res.render('login');
});


module.exports = router;