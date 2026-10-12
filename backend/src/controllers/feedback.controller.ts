import { Request, Response } from "express";
import { FeedbackService } from "../services/feedback.service";

export class FeedbackController {
  constructor(private _feedbackService: FeedbackService) {}

  createFeedback = (request: Request, response: Response) => {
    try {
      console.log("feedback controller");
      const feedback = this._feedbackService.createFeedback(request.body);
      return response.status(201).json({
        message: "Feedback submitted successfully",
        feedbackId: feedback.id,
      });
    } catch (error) {
      return response.status(400).json({
        message:
          error instanceof Error ? error.message : "Failed to submit feedback",
      });
    }
  };
}
