import connectDB from "../../../../lib/DBconnect";
import Feedback from "../../../../Models/Feedback";

export async function GET() {
  try {
    await connectDB();
    const feedbackList = await Feedback.find({});
    return new Response(JSON.stringify(feedbackList), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error while fetching feedbacks" }),
      { status: 500 }
    );
  }
}
