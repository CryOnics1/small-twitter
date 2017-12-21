const validator = require('../middlewares/validatorMiddleware');
const authValidatorRules = require('../validators/authValidator');
const authController = require('../controllers/authController');
const { responseMiddleware } = require('../middlewares');

module.exports = (router) => {
    router.post('/signup', responseMiddleware, validator(authValidatorRules.signup), authController.signup);
};
