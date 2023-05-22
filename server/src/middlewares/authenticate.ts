import { ApiError } from '@error/ApiError';
import { Request, Response, NextFunction } from 'express';

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user) {
    next(ApiError.unauthorized('you are not logged in!'));
  } else {
    next();
  }
};

export default authenticate;