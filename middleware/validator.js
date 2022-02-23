const { check, validationResult } = require('express-validator');

exports.signupValidator = [
  check('username').not().trim(),
  check('email').isEmail().normalizeEmail(),
  check('password')
    .isLength({ min: 6 }),
];

// eslint-disable-next-line consistent-return
exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({
      errorMessage: firstError,
    });
  }

  next();
};
