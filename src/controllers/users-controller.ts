import { Request, Response } from "express"
import { hash } from "bcrypt"
import { z } from "zod"

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),
      password: z.string().min(8),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    const hashedPassword = await hash(password, 8)


    return response.json({ message: "okei", hashedPassword })
  }
}

export { UsersController }
