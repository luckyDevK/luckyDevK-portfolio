import { Heading, Text, Flex, Button } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { LucideMail, Phone, MapPin } from "lucide-react";

import Card from "../UI/Card";

export default function Contact() {
  return (
    <div className="mt-10" id="contact">
      <Heading as="h2" size="6">
        Get In Touch
      </Heading>
      <Text as="p" mt="3" size="4" wrap="pretty">
        Have a project in mind or just want to chat? I'd love to hear from you!
      </Text>
      <Heading align="left" my="8" mb="5" weight="medium">
        Let's Connect
      </Heading>
      <Flex direction="column" gap="5">
        <Card
          centered={false}
          className="flex items-center gap-4 py-5 px-5"
          direction="row"
        >
          <div className="rounded-full w-12 h-12  gradient-dark-blue shadow-md flex items-center justify-center">
            <LucideMail width="24" height="24" className="text-white" />
          </div>
          <Flex direction="column" align="start">
            <Heading as="h4" size="4">
              Email
            </Heading>
            <Text>veryluckykurniawan@gmail.com</Text>
          </Flex>
        </Card>

        <Card
          centered={false}
          className="flex items-center gap-4 py-5 px-5"
          direction="row"
        >
          <div className="rounded-full w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 shadow-md flex items-center justify-center">
            <Phone width="24" height="24" className="text-white" />
          </div>
          <Flex direction="column" align="start">
            <Heading as="h4" size="4">
              Phone
            </Heading>
            <Text>088217850499</Text>
          </Flex>
        </Card>

        <Card
          centered={false}
          className="flex items-center gap-4 py-5 px-5"
          direction="row"
        >
          <div className="rounded-full w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 shadow-md flex items-center justify-center">
            <MapPin width="24" height="24" className="text-white" />
          </div>
          <Flex direction="column" align="start">
            <Heading as="h4" size="4">
              Location
            </Heading>
            <Text>Mojokerto, Jawa Timur</Text>
          </Flex>
        </Card>
      </Flex>

      <Text size="4" mt="7" as="p">
        I'm always open to discussing new opportunities, creative projects, or
        potential collaborations. Whether you have a question about my work or
        just want to say hello, feel free to reach out!
      </Text>

      <Card
        centered={true}
        direction="column"
        className="mt-10 py-6 px-6 max-w-md bg-white/5 border border-white/10 rounded-xl shadow-lg"
      >
        <Form.Root className="space-y-6 w-full">
          {/* Name Field */}
          <Form.Field name="name">
            <Form.Control asChild>
              <input
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

      <Text as="p" wrap="pretty" mt="5">
        © 2025 Lucky Dev. Built with ❤️ using React & TypeScript
      </Text>
    </div>
  );
}
