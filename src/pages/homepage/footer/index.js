import React from "react";
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import {
  IconDev,
  IconLinkedin,
  IconTwitch,
  IconTwitter,
  IconYoutube,
  IconGithubAlt,
} from "../../../assets/icons/imported/IconSocials";
import { IconGithub } from "../../../assets/icons";

const SocialLink = ({ name, href, icon, ...props }) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return (
    <Link
      as="li"
      listStyleType="none"
      p=".5em"
      aria-label={name}
      {...props}
      href={href}
      // target="_blank"
      // rel="noopener"
      // rel="noreferrer"
    >
      <Icon as={icon} />
    </Link>
  );
};

const Footer = () => {
  return (
    <Box as="footer" mb="16px" display="grid" placeItems="center">
      <Stack as="ul" mb="16px" direction="row" spacing={4}>
        <SocialLink
          name="LinkedIn"
          href="https://www.linkedin.com/in/greg-ogun/"
          icon={IconLinkedin}
        />
        <SocialLink
          name="Github"
          href="https://github.com/gregogun"
          icon={IconGithubAlt}
        />
        <SocialLink
          name="Twitter"
          href="https://twitter.com/gregogun"
          icon={IconTwitter}
        />
        <SocialLink
          name="Youtube"
          href="https://www.youtube.com/channel/UCQDUHOvgodaEqjHm9Ihn87w"
          icon={IconYoutube}
        />
        <SocialLink
          name="Twitch"
          href="https://www.twitch.tv/gregogun"
          icon={IconTwitch}
        />
        <SocialLink name="Dev" href="https://dev.to/gregogun" icon={IconDev} />
      </Stack>
      <Box display="grid" placeItems="center">
        <Link href="https://github.com/gregogun">
          Designed & Coded by Greg Ogun
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
