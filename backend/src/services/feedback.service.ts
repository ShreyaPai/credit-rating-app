import { Request } from "express";
import { FeedbackRepository } from "../repositories/feedaback.repository";
import { FeedbackRequest } from "../interfaces/feedback.interface";
import { AppError } from "../errors/error";

export class FeedbackService {
  constructor(private _feedbackRepository: FeedbackRepository) {}

  public createFeedback(body: FeedbackRequest) {
    console.log("feedback service");
    if (!body.name || body.name.length < 2) {
      throw new AppError(
        400,
        "Invalid name. Name should be present and should be at least 3 characters long.",
      );
    } else if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      throw new AppError(
        400,
        "Invalid email. Email is mandatory and proper format",
      );
    } else if (
      !Number.isInteger(body.rating) ||
      body.rating < 1 ||
      body.rating > 5
    ) {
      throw new AppError(
        400,
        "Invalid credit rating, credit rating can be between 1 and 5",
      );
    } else if (
      typeof body.comments !== "string" ||
      body.comments.length > 500
    ) {
      throw new AppError(
        400,
        "Invalid comment. Comment cannot be more than 500 characters",
      );
    } else if (!body.issuerId) {
      throw new AppError(400, "Invalid issuer");
    }
    return this._feedbackRepository.create(body);
  }
}
