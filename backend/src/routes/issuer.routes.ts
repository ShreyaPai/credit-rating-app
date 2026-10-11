import { Router } from "express";
import { IssuerController } from "../controllers/issuer.controller";
import { IssuerService } from "../services/issuers.service";
import { IssuierRepository } from "../repositories/issuer.repository";

const router = Router();

const issuerRepository = new IssuierRepository()
const issuerService = new IssuerService(issuerRepository);
const issuerController = new IssuerController(issuerService);

router.get('/', issuerController.getAllIssuers)

router.get('/:id', issuerController.getById)

export default router;