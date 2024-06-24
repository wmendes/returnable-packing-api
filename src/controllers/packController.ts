import { Request, Response } from 'express';
import prisma from '../models/packModel';

export const createPack = async (req: Request, res: Response) => {
  try {
    const { material, capacity, returnable } = req.body;
    const newPack = await prisma.returnablePack.create({
      data: { material, capacity, returnable }
    });
    res.status(201).json(newPack);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create returnable pack' });
  }
};

export const getPacks = async (req: Request, res: Response) => {
  try {
    const packs = await prisma.returnablePack.findMany();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve returnable packs' });
  }
};
