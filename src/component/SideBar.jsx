import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router";
import { useColorMode } from "@/components/ui/color-mode";
import { Menu, AppWindow, FileText, Tags, ArrowLeftRight } from "lucide-react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleColorMode } = useColorMode();

  const Menus = [
    { title: "Dashboard", url: "/", icon: AppWindow },
    { title: "Transaction", url: "/transactions", icon: ArrowLeftRight },
    { title: "Reports", url: "/reports", icon: FileText },
    { title: "Category", url: "/categories", icon: Tags },
  ];

  return (
    <Flex>
      <Box
        bg="amber.400"
        minH="100vh"
        p={5}
        pt={8}
        transition="width 0.3s"
        width={isOpen ? "280px" : "80px"}
        position="relative"
        display="flex"
        flexDirection="column"
      >
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<Icon as={Menu} boxSize={5} />}
          onClick={() => setIsOpen(!isOpen)}
          position="absolute"
          top="30px"
          right="-18px"
          size="sm"
          borderRadius="full"
          border="2px"
          borderColor="gray.600"
          transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
          transition="transform 0.3s"
          bg="gray.800"
          color="white"
          boxShadow="md"
          _hover={{ bg: "gray.700" }}
        >
          <Menu />
        </IconButton>

        <HStack spacing="4" alignItems="center">
          <Box
            as="img"
            src="/vite.svg"
            boxSize="30px"
            transition="transform 0.5s"
            transform={isOpen ? "rotate(360deg)" : "rotate(0deg)"}
          />
          {isOpen && (
            <Text fontSize="xl" fontWeight="medium" color="white">
              AdeCodes
            </Text>
          )}
        </HStack>

        <VStack spacing={2} align="stretch" mt={8} flex="1">
          {Menus.map((menu, index) => {
            const isActive = location.pathname === menu.url;
            return (
              <Flex
                key={index}
                align="center"
                gap={4}
                p={2}
                borderRadius="md"
                cursor="pointer"
                bg={isActive ? "whiteAlpha.800" : "transparent"}
                color={isActive ? "black" : "gray.100"}
                _hover={{ bg: "whiteAlpha.400" }}
                mt={menu.gap ? 9 : 2}
                onClick={() => navigate(menu.url)}
              >
                <Icon as={menu.icon} boxSize={5} />
                {isOpen && (
                  <Text fontSize="sm" fontWeight="medium">
                    {menu.title}
                  </Text>
                )}
              </Flex>
            );
          })}
        </VStack>

        <Button
          onClick={toggleColorMode}
          size="sm"
          mt={4}
          colorScheme="gray"
          variant="outline"
        >
          {isOpen ? "Toggle Theme" : "🌗"}
        </Button>
      </Box>
    </Flex>
  );
}
