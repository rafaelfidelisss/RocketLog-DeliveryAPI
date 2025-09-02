import { prisma } from "@/database/prisma"
import request from "supertest"
import { app } from "@/app"

describe("UsersController", () => {
  let user_id: string

  afterAll( async () => {
    await prisma.user.delete({ where: { id: user_id } })
  })

  test("create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Usuario testador",
      email: "testador@email.com",
      password: "123456789"
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
    expect(response.body.name).toBe("Usuario testador")

    user_id = response.body.id
  })

  test("throw an error when creating user with existing email", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicated testador",
      email: "testador@email.com",
      password: "123456789"
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("User with same email already exists")
  })

  test("throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Testador",
      email: "emeioInvalido",
      password: "123456789"
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("validation error")
  })
})