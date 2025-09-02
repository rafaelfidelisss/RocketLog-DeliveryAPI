import { prisma } from "@/database/prisma"
import request from "supertest"
import { app } from "@/app"

describe("SessionsController", () => {
  let user_id: string

  afterAll( async () => {
    await prisma.user.delete({ where: { id: user_id } })
  })

  test("authenticate and get access token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Usuario testador de autenticidades",
      email: "autentico@email.com",
      password: "123456789"
    })

    user_id = userResponse.body.id

    const sessionResponse = await request(app).post("/sessions").send({
      email: "autentico@email.com",
      password: "123456789"
    })

    expect(sessionResponse.status).toBe(200)
    expect(sessionResponse.body.token).toEqual(expect.any(String))
  })
})