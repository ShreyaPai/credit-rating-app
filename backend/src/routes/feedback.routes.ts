import { Router } from "express";
import { FeedbackController } from "../controllers/feedback.controller";
import { FeedbackRepository } from "../repositories/feedaback.repository";
import { FeedbackService } from "../services/feedback.service";

const router = Router();

const feedbackRepository = new FeedbackRepository();
const feedbackService = new FeedbackService(feedbackRepository);
const feedbackController = new FeedbackController(feedbackService);

router.post('/', feedbackController.createFeedback)

export default router