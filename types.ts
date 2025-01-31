export interface FeedbackResponse {
    _id: string;
    name: string;
    feedback: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
export interface FormData {
    name: string;
    feedback: string;
  }