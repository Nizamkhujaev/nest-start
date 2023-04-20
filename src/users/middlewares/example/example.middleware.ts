import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization)
      throw new HttpException('No Authorization', HttpStatus.FORBIDDEN);

    if (authorization) {
      next();
    }
  }
}
