import React from "react";
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
} from "@chakra-ui/react";
import { Heading2 } from "../../components/typography";
import { MdClose } from "react-icons/md";

const SideNav = ({ isOpen, onOpen, onClose, ...props }) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton onClick={onClose} icon={<MdClose />} />
          </DrawerHeader>
          <DrawerBody>
            <Stack as="ul" spacing={16}>
              <ListItem>
                <Link>projects</Link>
              </ListItem>
              <ListItem>
                <Link>about</Link>
              </ListItem>
              <ListItem>
                <Link>skills</Link>
              </ListItem>
              <ListItem>
                <Link>contact</Link>
              </ListItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SideNav;
