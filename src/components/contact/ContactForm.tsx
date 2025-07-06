import Card from "../UI/Card";
import * as Form from "@radix-ui/react-form";

export default function ContactForm() {
  return (
    <Card
      centered={true}
      direction="column"
      className="mt-10 py-6 px-6  w-full bg-white/5 border border-white/10 rounded-xl shadow-lg"
    >
      <Form.Root
        className="space-y-6 w-full"
        action={"https://getform.io/f/bolodyqa"}
        method="POST"
      >
        {/* Name Field */}
        <Form.Field name="name">
          <Form.Control asChild>
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
            />
          </Form.Control>
        </Form.Field>

        {/* Email Field */}
        <Form.Field name="email">
          <Form.Control asChild>
            <input
              name="email"
              placeholder="Your Email"
              type="email"
              className="w-full px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
            />
          </Form.Control>
        </Form.Field>

        {/* Message Field */}
        <Form.Field name="message">
          <Form.Control asChild>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 h-32 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200"
            />
          </Form.Control>
        </Form.Field>

        {/* Submit Button */}
        <Form.Submit asChild>
          <button className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-semibold py-2 rounded-md hover:from-sky-500 hover:to-cyan-600 transition duration-200">
            Send Message
          </button>
        </Form.Submit>
      </Form.Root>
    </Card>
  );
}
