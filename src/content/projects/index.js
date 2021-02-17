import React from "react";
import { GitjobsImg, PortfolioImg } from "../../assets/images";

const projects = [
  {
    name: "Portfolio v1",
    info:
      "I built this site with React using parcel bundler for it's no-config approach. I've implemented the Chakra UI component library to build out the UI, integrating with Storybook to build my own reusable components whilst retaining the rich accessibility features Chakra has to offer. Going forward, I'm hoping to include a blog, integrating with Gatsby for it's SEO, MDX & SSG features.",
    media: <PortfolioImg />,
    live: null,
    // need to update to current site url once site goes public
    repo: "https://github.com/gregogun",
    id: 1,
  },
  {
    name: "gitjobs",
    info:
      "Search for jobs available on the Github Jobs site, with reimagined design and functionality. You can search by job title/keyword, location or full time positions.",
    media: <GitjobsImg />,
    live: "https://go-gitjobs.netlify.app",
    repo: "https://github.com/gregogun/github-jobs-api",
    id: 2,
  },
];

export default projects;
