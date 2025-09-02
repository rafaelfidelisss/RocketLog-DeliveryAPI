import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import z from "zod";

class DeliveriesLogsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string(),
    });

    const { delivery_id, description } = bodySchema.parse(request.body);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
    });

    if (!delivery) {
      throw new AppError("delivery not found", 404);
    }

    if (delivery.status === "processing") {
      throw new AppError("please change status to shipped");
    }

    if (delivery.status === "delivered") {
      throw new AppError("this order has already been delivered");
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description,
      },
    });

    return response.status(201).json({ message: "added new log" });
  }

  async show(request: Request, response: Response) {
    const paramsSchema = z.object({
      delivery_id: z.string().uuid(),
    });

    const { delivery_id } = paramsSchema.parse(request.params);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
      include: {
        logs: true,
        user: { 
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
      },
    })

    if (
      request.user?.role === "customer" &&
      request.user.id !== delivery?.userId
    ) {
      throw new AppError("The user can view only their deliveries", 401);
    }

    return response.json(delivery);
  }
}

export { DeliveriesLogsController };
