import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestContext } from '~/@core/context';
import { ClsHook } from '~/@core/context/cls-hook';
@Injectable()
export class ContextMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    // console.log('----------ContextMiddleware---------');
    try {
      const requestContext = new RequestContext(req, res);
      ClsHook.run(() => {
        ClsHook.set(RequestContext.name, requestContext);
        next();
      });
    } catch (error) {
      next();
    }
  }
}
