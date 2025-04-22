import { createRouterGuard } from "./modules/guard";
import router from "./modules/router";

// 创建路由守卫
createRouterGuard(router);

export default router;
