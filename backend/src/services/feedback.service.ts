import { FeedbackRepository } from "../repositories/feedaback.repository";

export class FeedbackService {
  constructor(private _feedbackRepository: FeedbackRepository) {}

  createFeedback(request: any) {
    const { body } = request;
    console.log("feedback service");
    if (!body.name || body.name.length < 2) {
      throw new Error("Check if name is valid");
    } else if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      throw new Error("Invalid email");
    } else if (
      !Number.isInteger(body.rating) ||
      body.rating < 1 ||
      body.rating > 5
    ) {
      throw new Error(
        "Invalid credit rating, credit rating can be between 1 and 5",
      );
    } else if (
      typeof body.comments !== "string" ||
      body.comments.length > 500
    ) {
      throw new Error("Comment cannot be more than 500 characters");
    }
    return this._feedbackRepository.create(body);
  }
}
