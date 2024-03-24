import { withAuthorization } from "./middlewares/withAuthorization";
import { stackMiddlewares } from "./middlewares/chain";
import { withInternatianalization } from "./middlewares/withInternatianalization";

export default stackMiddlewares([ withInternatianalization,withAuthorization]);
export const config = {
  //matcher: ["/home", "/configuration", "/signin"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)","//sw.js"],
};
