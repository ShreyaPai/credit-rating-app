export interface FeedbackRequest {
  issuerId: string;
  name: string;
  email: string;
  rating: number;
  comments: string;
}

export interface FeedbackResponse {
  message: string;
  feedbackId: string;
}
