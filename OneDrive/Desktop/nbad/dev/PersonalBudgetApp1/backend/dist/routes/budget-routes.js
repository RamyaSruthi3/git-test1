import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { sendBudgetToUser, getAllBudget } from "../controllers/budget-controllers.js";
//Protected API
const budgetRoutes = Router();
budgetRoutes.post("/new", verifyToken, sendBudgetToUser);
budgetRoutes.get("/all-budget", verifyToken, getAllBudget);
export default budgetRoutes;
//# sourceMappingURL=budget-routes.js.map