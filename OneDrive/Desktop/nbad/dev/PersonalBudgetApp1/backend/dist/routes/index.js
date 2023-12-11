import { Router } from "express";
import userRoutes from "./user-routes.js";
import budgetRoutes from "./budget-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); //domain/api/v1/user
appRouter.use("/budget", budgetRoutes); //domain/api/v1/budget
export default appRouter;
//# sourceMappingURL=index.js.map