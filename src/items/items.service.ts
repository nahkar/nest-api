import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item One',
      qty: 100,
      description: 'Description item One',
    },
    {
      id: '2',
      name: 'Item Two',
      qty: 200,
      description: 'Description item Two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id): Item {
    return this.items.find(item => item.id === id);
  }
}
