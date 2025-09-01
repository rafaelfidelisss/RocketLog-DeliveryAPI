import { deliveriesRoutes } from "@/routes/deliveries-routes";
import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z from "zod";

class DeliveriesLogsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string()
    })

    const { delivery_id, description } = bodySchema.parse(request.body)

    const delivery =  await prisma.delivery.findUnique({
      where: { id: delivery_id }
    })

    if (!delivery) {
      throw new AppError("delivery not found", 404)
    }

    if (delivery.status === "processing") {
      throw new AppError("please change status to shipped")
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description
      }
    })

    return response.status(201).json({ message: "added new log" })
  }
}

export { DeliveriesLogsController }