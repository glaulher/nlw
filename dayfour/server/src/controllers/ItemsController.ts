import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url_image: `http://192.168.1.104:3333/uploads/${item.image}`,
      };
    });
    return res.json(serializedItems);
  }
}
export default ItemsController;
