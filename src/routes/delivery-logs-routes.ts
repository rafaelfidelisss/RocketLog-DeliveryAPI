import { Router } from "express"

import { DeliveriesLogsController } from "@/controllers/delivery-logs-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization"

const deliveryLogsRoutes = Router()
const deliveryLogsController = new DeliveriesLogsController()

deliveryLogsRoutes.post(
  "/", 
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsController.create
)

deliveryLogsRoutes.get(
  "/:delivery_id/show", 
  ensureAuthenticated, 
  verifyUserAuthorization(["sale", "customer"]),
  deliveryLogsController.show
)

export { deliveryLogsRoutes }
