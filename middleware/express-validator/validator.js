import {validationResult} from "express-validator";

export default {
  validate (req, res, next) {
    const errors = validationResult(req);

    if (req.body.length <= 0 || Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: 'Request body is empty' });
    }
    if (!errors.isEmpty()) return res.status(400).json(errors)
    else next();
  }
}
