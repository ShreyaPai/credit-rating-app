export class FeedbackRepository {
  id = 1;
  feedbackList: any[] = [];
  
  create(feedback: any) {
    const data = {
      id: "fb_" + String(this.id).padStart(3, "0"),
      ...feedback,
    };

    this.feedbackList.push(data);
    this.id++;
    return data;
  }
}
