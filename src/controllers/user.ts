import { Request, Response } from 'express'

class UserController {
  public async user (req: Request, res: Response): Promise<Response> {
    const user = [
      {
        id: 1,
        name: 'Vendedor One',
        sales: [
          { id: 1, value: 220.00 },
          { id: 2, value: 80.50 }
        ]
      },
      {
        id: 2,
        name: 'Vendedor Two',
        sales: [
          { id: 3, value: 400.00 },
          { id: 4, value: 120.50 }
        ]
      }
    ]
    return res.json(user)
  }
}

export default new UserController()
