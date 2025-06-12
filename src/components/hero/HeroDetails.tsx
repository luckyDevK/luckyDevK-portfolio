import { MapPinHouse, Mail } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import SocialMediaButton from "../logos/SocialMediaButton";
import { Button, Text } from "@radix-ui/themes";

export default function HeroDetails() {
  return (
    <div className="w-full mt-8 flex flex-col items-start gap-6 ">
      {/* Location */}
      <Text as="p" className="flex items-center gap-2">
        <MapPinHouse />
        Mojokerto, Indonesia
      </Text>

      {/* Availability */}
      <Text as="p" className="flex items-center gap-3">
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500" />
        </span>
        Actively seeking a developer position
      </Text>

      {/* Social Links */}
      <div className="flex gap-4 pt-2">
        <SocialMediaButton
          ariaLabel="Github Logo"
          icon={<GitHubLogoIcon width={19} height={19} />}
        />
        <SocialMediaButton
          ariaLabel="Instagram Logo"
          icon={<InstagramLogoIcon width={19} height={19} />}
        />
        <SocialMediaButton
          ariaLabel="Mail Logo"
          icon={<Mail width={19} height={19} />}
        />
      </div>
    </div>
  );
}
