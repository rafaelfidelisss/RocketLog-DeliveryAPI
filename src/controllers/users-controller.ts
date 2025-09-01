import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"
import { prisma } from "@/database/prisma"
import { hash } from "bcrypt"
import { z } from "zod"

class UsersController {
  async create(request: Request, response: Response) {
    // Criando a validação dos dados da request.
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),
      password: z.string().min(8),
    })

    // Extraindo os dados validados da request.
    const { name, email, password } = bodySchema.parse(request.body)

    // Verificando se o email já foi cadastrado.
    const userWithSameEmail = await prisma.user.findFirst({ where: { email } })
    if (userWithSameEmail) {
      throw new AppError("User with same email already exists")
    }

    // Criptografando a senha do usuário.
    const hashedPassword = await hash(password, 8)

    // Cadastrando usuário no banco de dados.
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    // Removendo a senha dos dados do usuário para não expor ela no log.
    const { password: _, ...userWithoutPassword  } = user

    return response.status(201).json(userWithoutPassword)
  }
}

export { UsersController }
