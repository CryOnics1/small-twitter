const validator = require('../middlewares/validatorMiddleware');
const authValidatorRules = require('../validators/authValidator');
const authController = require('../controllers/authController');

module.exports = (router) => {
    router.post('/api/signup', validator(authValidatorRules.signup), authController.signup);
    router.post('/api/login', authController.login);
};
