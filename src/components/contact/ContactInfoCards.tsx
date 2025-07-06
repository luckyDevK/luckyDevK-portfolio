import { Flex, Heading, Text } from "@radix-ui/themes";
import { LucideMail, Phone, MapPin } from "lucide-react";

import Card from "../UI/Card";

export default function ContactInfoCards() {
  return (
    <Flex
      direction="column"
      gap="5"
      flexShrink={"1"}
      className="max-w-120 w-full mt-10 mb-8"
    >
      <Heading align="left" my="8" mb="2" weight="medium">
        Let's Connect
      </Heading>
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
  );
}
