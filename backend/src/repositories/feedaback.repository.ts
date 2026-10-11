export class FeedbackRepository {
  id = 1;
  feedbackList: any[] = [];
  
  create(feedback: any) {
    const data = {
      ...feedback,
      id: "fb_" + String(this.id).padStart(3, "0"),
      submittedAt: new Date().toISOString(),
    };

    this.feedbackList.push(data);
    this.id++;
    return data;
  }
}
