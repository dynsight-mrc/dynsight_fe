import { withAuthorization } from "./middlewares/withAuthorization";
import { stackMiddlewares } from "./middlewares/chain";
import { withInternatianalization } from "./middlewares/withInternatianalization";
import { withAuthentication } from "./middlewares/withAuthentication";

export default stackMiddlewares([ withInternatianalization,withAuthentication,withAuthorization]);
export const config = {
  //matcher: ["/home", "/configuration", "/signin"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)","//sw.js"],
};
