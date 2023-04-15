import { rest } from "msw";

interface PostRequestBody {
  name: string;
  email: string;
  message: string;
}

export const handlers = [
  rest.post<PostRequestBody>("/contact-form", async (req, res, ctx) => {
    const { name, email, message } =
      await (req.json() as Promise<PostRequestBody>);

    //   Error messages are not getting caught in try catch. MSW bug?
    if (!name) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Name cannot be empty",
        })
      );
    }

    if (!email) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Email cannot be empty",
        })
      );
    }

    if (!message) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Message cannot be empty",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        successMessage: `Thank you ${name}, your message was received successfully.`,
      })
    );
  }),
];
