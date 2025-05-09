import { v4 } from 'uuid';
import { Request, Response } from 'express';
import { ClsHook } from './cls-hook';
export class RequestContext {
  public static nsId = v4();
  public readonly id: string;
  public request: Request;
  public response: Response;
  public attributes: { [key: string]: any } = {};
  constructor(request: Request, response: Response) {
    this.id = v4();
    this.request = request;
    this.response = response;
    this.attributes = {};
  }

  public static setAttribute<T>(key: string, value: T) {
    const reqContext = RequestContext.currentRequestContext();
    if (reqContext) {
      if (!reqContext.attributes) {
        reqContext.attributes = {};
      }
      Object.assign(reqContext.attributes, {
        [key]: value,
      });
    }
  }
  public static getAttribute<T>(key: string): T {
    const reqContext = RequestContext.currentRequestContext();
    if (!reqContext) {
      return undefined;
    }
    const attributes = reqContext.attributes || {};
    if (attributes[key]) {
      return attributes[key] as T;
    }
    return undefined;
  }

  public static currentRequestContext(): RequestContext {
    // const session = cls.getNamespace(RequestContext.nsId);
    // if (session && session.active) {
    //     return session.get(RequestContext.name);
    // }
    // return null;
    return ClsHook.get(RequestContext.name);
  }
  public static currentRequest(): Request {
    return RequestContext.currentRequestContext().request;
  }

  public static currentResponse(): Response {
    return RequestContext.currentRequestContext().response;
  }

  public static getHeader(key: string) {
    const req = RequestContext.currentRequest();
    const { headers = {} } = req;
    return headers[key];
  }
}
