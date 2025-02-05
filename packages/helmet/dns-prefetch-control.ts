import { Injectable, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";
import { XDnsPrefetchControlOptions } from "helmet/dist/types/middlewares/x-dns-prefetch-control";

@Injectable()
export class HelmetDnsPrefetchControlMiddleware implements NestMiddleware {
  public static configure(opts: XDnsPrefetchControlOptions) {
    this.options = opts;
  }

  private static options: XDnsPrefetchControlOptions;

  public use(req: any, res: any, next: any) {
    if (HelmetDnsPrefetchControlMiddleware.options) {
      helmet.dnsPrefetchControl(HelmetDnsPrefetchControlMiddleware.options)(
        req,
        res,
        next
      );
    } else {
      helmet.dnsPrefetchControl()(req, res, next);
    }
  }
}
