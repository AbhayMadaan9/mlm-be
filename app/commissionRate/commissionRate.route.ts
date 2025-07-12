
        import { Router } from "express";
        import { catchError } from "../common/middleware/cath-error.middleware";
        import * as commission-rateController from "./commissionRate.controller";
        import * as commission-rateValidator from "./commissionRate.validation";

        const router = Router();
        
        router
        .get("/", commission-rateController.getAllCommissionRate)
        .get("/:id", commission-rateController.getCommissionRateById)
        .delete("/:id", commission-rateController.deleteCommissionRate)
        .post("/", commission-rateValidator.createCommissionRate ,catchError, commission-rateController.createCommissionRate)
        .put("/:id", commission-rateValidator.updateCommissionRate, catchError, commission-rateController.updateCommissionRate)
        .patch("/:id", commission-rateValidator.editCommissionRate, catchError, commission-rateController.editCommissionRate)

        export default router;
    
    