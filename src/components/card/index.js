import React from "react";
import { Box, Flex, Icon, Stack, Text, useColorMode } from "@chakra-ui/react";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";
import { PrimaryButton, SecondaryButton } from "../button";
import { Heading3 } from "../typography";

export const SkillCard = ({ icon, name = "Insert Name", ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      display="grid"
      placeItems="center"
      m="auto"
      w={{ base: "90%", md: "100%" }}
      color={!icon && "default.light"}
      border={colorMode === "dark" && "2px"}
      borderColor={colorMode === "dark" && "default.light"}
      mb="32px"
      bg="default.dark"
      py="24px"
    >
      <Flex w="100%" align="center">
        <Box display="grid" placeItems="center" w="30%">
          <Icon w="32px" h="32px" as={icon} />
        </Box>
        <Box w="70%">
          <Text fontSize="20px" fontWeight="bold" color="default.light">
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export const ProjectCard = ({ media, ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <Box w={{ base: "100%", lg: "70%", xl: "50%" }}>
      <Box
        {...props}
        p="8px"
        display="grid"
        placeItems="center"
        alignItems="center"
      >
        <Box
          border="solid 2px"
          borderColor={colorDark}
          boxSize={{ base: "280px", sm: "320px", md: "360px", lg: "400px" }}
          mx="auto"
          mb="16px"
          display="grid"
          placeItems="center"
        >
          {media && media}
        </Box>
      </Box>
    </Box>
  );
};

export const ProjectInfoCard = ({ name, info, live, repo, ...props }) => {
  return (
    <Box
      {...props}
      display="grid"
      placeItems="center"
      w={{ base: "80%", md: "70%", lg: "55%", xl: "50%" }}
    >
      <Box p="16px" display="grid" placeItems="center">
        <Stack
          spacing={8}
          h={{ md: "360px", lg: "380px", xl: "380px" }}
          justify="space-between"
          direction="column"
          textAlign={{ base: "center", lg: "left" }}
        >
          <Heading3>{name}</Heading3>
          <Text>{info}</Text>
          <Stack
            justify={!live && { md: "center", xl: "left" }}
            align="center"
            spacing={8}
            direction={{ base: "column", md: "row" }}
          >
            {live && (
              <PrimaryButton
                as="a"
                href={live}
                w={{ base: "208px", lg: "240px" }}
                h={{ base: "56px", lg: "64px" }}
              >
                LIVE SITE
              </PrimaryButton>
            )}
            <SecondaryButton
              as="a"
              href={repo}
              w={{ base: "208px", lg: "240px" }}
              h={{ base: "56px", lg: "64px" }}
            >
              GITHUB REPO
            </SecondaryButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
