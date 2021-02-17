import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Stack,
  Link,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Heading2 } from "../../components/typography";
import { MdClose } from "react-icons/md";
import { MenuIcon } from "../../assets/icons";
import useColorSwitcher from "../../utils/hooks/useColorSwitcher";
import CloseIcon from "../../assets/icons/custom/CloseIcon";

const SideNav = ({ toRef, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorLight, colorDark } = useColorSwitcher();
  const btnRef = useRef();
  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "block", lg: "none" }}
        w="64px"
        h="60px"
        colorScheme={colorLight}
        icon={<MenuIcon />}
      />
      <Drawer
        w="80%"
        finalFocusRef={toRef}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay>
          <DrawerContent bg={colorLight}>
            <DrawerHeader border="none">
              <IconButton
                w="64px"
                h="60px"
                onClick={onClose}
                colorScheme={colorLight}
                icon={<CloseIcon />}
              />
            </DrawerHeader>
            <DrawerBody>
              <Stack py="4em" mx="auto" as="ul" spacing={16}>
                {children}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SideNav;
