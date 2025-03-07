import { NextRequest } from "next/server";
import connectDB from "../../../../lib/DBconnect";
import Feedback from "../../../../Models/Feedback";

export async function POST(request: NextRequest) {
  await connectDB();
  const data = await request.json();

  const feedbackRecord = new Feedback(data);

  try {
    await feedbackRecord.save();
    return new Response(
      JSON.stringify({ message: "Feedback Record created successfully" }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error while creating feedback" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
