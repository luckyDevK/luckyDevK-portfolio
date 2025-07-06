import { Heading, Text, Flex } from "@radix-ui/themes";

import ContactInfoCards from "./ContactInfoCards";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="mt-10 md:w-[70%]" id="contact">
      <Heading as="h2" size={{ initial: "6", md: "7" }}>
        Get In Touch
      </Heading>
      <Text as="p" mt="3" size="4" wrap="pretty">
        Have a project in mind or just want to chat? I'd love to hear from you!
      </Text>

      <Flex
        gap={{ md: "8", initial: "5" }}
        align="center"
        justify="center"
        direction={{ initial: "column", md: "row" }}
        className="mt-6"
      >
        <ContactInfoCards />
        <ContactForm />
      </Flex>

      <div className="max-w-md md:mt-1 mt-3">
        <Text className="w-full">
          I'm always open to discussing new opportunities, creative projects, or
          potential collaborations. Whether you have a question about my work or
          just want to say hello, feel free to reach out!
        </Text>
      </div>

      <div className="w-full h-1 bg-white/10 my-10" />

      <Text as="p" wrap="pretty" mt="5" className="text-center text-sm">
        © 2025 Lucky Dev. Built with ❤️ using React & TypeScript
      </Text>
    </section>
  );
}
