import React from "react";
import { Icon } from "@chakra-ui/react";
import { Logo } from "../../assets/icons";
import CatLogo from "../../assets/icons/custom/CatLogo";

const projects = [
  {
    name: "Portfolio (This Site!)",
    info:
      "I built this site with React and parcel bundler. I've implemented the Chakra UI component library to build out the UI, integrating with Storybook to build my own reusable components whilst retaining the rich accessibility features Chakra has to offer. Going forward, I'm hoping to include a blog, integrating with Gatsby for it's SEO, MDX & SSR features.",
    media: <Icon boxSize="50%" as={Logo} />,
    live: null,
    // need to update to current site url once site goes public
    repo: "https://github.com/gregogun",
    id: 1,
  },
  {
    name: "gitjobs",
    info:
      "Search for jobs available on the Github Jobs site, with reimagined design and functionality. You can search by job title/keyword, location or full time positions.",
    media: <CatLogo />,
    live: "https://go-gitjobs.netlify.app",
    repo: "https://github.com/gregogun/github-jobs-api",
    id: 2,
  },
];

export default projects;
