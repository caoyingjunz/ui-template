import { dashboardRoutes } from './dashboard';
import { templateRoutes } from './template';
import { widgetsRoutes } from './widgets';
import { examplesRoutes } from './examples';
import { systemRoutes } from './system';
import { articleRoutes } from './article';
import { resultRoutes } from './result';
import { exceptionRoutes } from './exception';
import { safeguardRoutes } from './safeguard';
import { helpRoutes } from './help';
import { containerRoutes } from './container';
/**
 * 导出所有模块化路由
 */
export const routeModules = [
    dashboardRoutes,
    containerRoutes,
    templateRoutes,
    widgetsRoutes,
    examplesRoutes,
    articleRoutes,
    resultRoutes,
    exceptionRoutes,
    safeguardRoutes,
    systemRoutes,
    ...helpRoutes
];
//# sourceMappingURL=index.js.map