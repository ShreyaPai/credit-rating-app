import { NextFunction, Request, Response } from "express";
import { FeedbackService } from "../services/feedback.service";

export class FeedbackController {
  constructor(private _feedbackService: FeedbackService) {}

  createFeedback = (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      console.log("feedback controller");
      const feedback = this._feedbackService.createFeedback(request.body);
      return response.status(201).json({
        message: "Feedback submitted successfully",
        feedbackId: feedback.id,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      // if (message.includes("Invalid")) {
      //   return response.status(400).json({ message });
      // }

      // return response.status(500).json({
      //   message: "Internal server error",
      // });

      next(err);
    }
  };
}
