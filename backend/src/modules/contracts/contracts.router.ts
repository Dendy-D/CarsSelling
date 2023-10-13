import { Router } from 'express';

import {
  getContracts,
  createContract,
  getContractById,
  deleteContract,
} from './controllers';

const router = Router();

router.get('/', getContracts);
router.post('/', createContract);
router.get('/:id', getContractById);

router.delete('/:id', deleteContract); // backend only

export default router;
