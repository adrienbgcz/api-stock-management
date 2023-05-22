import {validationResult} from "express-validator";

export default {
  validate (req, res, next) {
    const errors = validationResult(req);
    if (!req.body.length || !Object.keys(req.body)) {
      return res.status(400).json({ error: 'Request body is empty' });
    }
    if (!errors.isEmpty()) return res.status(400).json(errors)
    else next();
  }
}
