import Prompt from "@models/prompt";
import { connectTodb } from "@utils/database";

export const GET = async (request, {params}) => {
  try {
    await connectTodb();

    const pormpts = await Prompt.find({
        creator: params.id
    }).populate("creator");

    return new Response(JSON.stringify(pormpts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
