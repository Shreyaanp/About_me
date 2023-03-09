import { Link as ReachLink } from 'react-router-dom';
import {useState, useContext} from 'react';
import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Link,
    Image,
    Button,
    Heading,
    Stack,
    VStack,
    BoxProps,

    Drawer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    DrawerContent,
    IconButton,
    useDisclosure,
    DrawerOverlay,
    useColorModeValue,
    useColorMode,
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import React from 'react';
  import {AiOutlineRead, AiOutlineHome,AiOutlineUser,AiOutlineCode,AiOutlineGithub,AiOutlineTrophy,AiOutlineAudit  } from 'react-icons/ai';
  import { FiMenu } from 'react-icons/fi';
  import Infocard from '../components/infocard/infocard';
  import Timeline from '../components/timeline';
  import Aboutme from '../components/Aboutme';
  import Projects from '../components/project/project';
  import Education from '../components/education';
  import Achievements from '../components/Achievement';
  import Articles from '../components/Article';
  import Skill from '../components/skill';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import Typewriter from 'typewriter-effect';

  import SidebarContent from '../components/sidebar';
  import Context from '../Context';
const Index = () =>{

  const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {item} = useContext(Context);
    const {setContextItem} = useContext(Context);
    return (
      <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh" boxShadow='dark-lg'>
            <Box
            boxShadow='dark-lg'
            display={{ base: 'none', lg: 'unset' }}
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            // pb="10"
            w="full" borderRight="none"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('inherit', 'gray.700')}
            borderRightWidth="1px"
            w="60"

          >
            <SidebarContent />
    </Box>
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs"
    >
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue('white', 'gray.800')}
          borderColor={useColorModeValue('inherit', 'gray.700')}
        >
          <VStack h="full" w="full" alignItems="flex-start" justify="space-between" >
        <Box w="full">
          <Flex px="4" py="5" align="center">
            <Text
              fontSize="2xl"
              ml="2"
              // color={useColorModeValue('brand.500', 'white')}
              fontWeight="semibold"
            >
              <Typewriter
                options={{
                  strings: ['Software Engineer', 'C.S.E Student', 'Developer', 'Programmer', 'Designer', 'Tech Enthusiast'],
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  deleteSpeed: 15,
                }}
              />
            </Text>
          </Flex>
          <Flex
            direction="column"
            as="nav"
            fontSize="md"
            // color="gray.600"
            aria-label="Main Navigation"
          >
            <Link

              onClick={() => setContextItem(<Infocard/>, onClose())}
              px="4"
              py="3"
              rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.100', 'gray.900')
              }}
              _activeLink={{
                bg: useColorModeValue('brand.100', 'brand.900')
              }}
            >
              <Flex align="center" gridGap="4"

              >
                <Icon as={AiOutlineHome} />
                <Text fontWeight="medium">Home</Text>
              </Flex>
            </Link>
            <Link
              onClick={() => setContextItem(<Aboutme/>, onClose())}
              px="4"
              py="3"
              rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.100', 'gray.900')
              }}
              _activeLink={{
                bg: useColorModeValue('brand.100', 'brand.900')
              }}
            >
              <Flex align="center" gridGap="4"

              >
                <Icon as={AiOutlineUser} />
                <Text fontWeight="medium">About</Text>
              </Flex>
</Link>
<Link

onClick = {() => setContextItem(<Skill/>, onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4">
  <Icon as={AiOutlineCode} />
  <Text fontWeight="medium">Skills</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Projects/>, onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4">
  <Icon as={AiOutlineGithub} />
  <Text fontWeight="medium">Project</Text>
</Flex>
</Link>
<Link
// on click set context item to be <timeline/>
onClick={()=>setContextItem(<Achievements/>, onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4">
  <Icon as={AiOutlineTrophy} />
  <Text fontWeight="medium">Achievements</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Timeline/>,  onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4"
>
  <Icon as={AiOutlineAudit} />
  <Text fontWeight="medium">Experience</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Education/>,   onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4">
  <Icon as={AiOutlineRead} />
  <Text fontWeight="medium">Education</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Articles/>,   onClose())}
px="4"
py="3"
rounded="md"
_hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.100', 'gray.900')
}}
_activeLink={{
  bg: useColorModeValue('brand.100', 'brand.900')
}}
>
<Flex align="center" gridGap="4">
  <Icon as={AiOutlineRead} />
  <Text fontWeight="medium">Article</Text>
</Flex>
</Link>
          </Flex>
        </Box>

        <Flex px="4" py="5" mt={10} justify="center" alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              size={'sm'}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              _hover={{ textDecoration: 'none' }}
            >
              <Avatar
                size={'sm'}
                name="Ahmad"
                src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              />
            </MenuButton>
            <Text ml={2} fontSize={17}>
                Shreyaan Pradhan <ChevronDownIcon />
              </Text>
            <MenuList fontSize={17} zIndex={5555}>
              <MenuItem as={Link} to="#">
                Github
              </MenuItem>
              <MenuItem as={Link} to="#">
                Linkedin
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </VStack>
        </DrawerContent>
      </Drawer>
        <Box ml={{ base: 0, sm : 0 ,md: 0, lg : 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            w="full"
            px="4"
            d={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
            borderBottomWidth="1px"
            borderColor={useColorModeValue('inherit', 'gray.700')}
            bg={useColorModeValue('white', 'gray.800')}
            justify={{ base: 'space-between', md: 'space-between', lg :"flex-end" }}
            boxShadow="lg"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: 'inline-flex', md: 'inline-flex', lg : 'none' }}
              onClick={onOpen}
              icon={<FiMenu />}
              size="md"
            />

            <Flex align="center">
              <Button onClick={toggleColorMode} size="sm" mr="2">
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>

            </Flex>
          </Flex>

          <Box as="main" p={5} minH="30rem" >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="center"
              h="100%"
            >
              <Stack spacing={0}>
                {item}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  }

  const NavItem = (props: any) => {
    const color = useColorModeValue('gray.600', 'gray.300');

    const { icon, children } = props;
    return (
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        // color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.900'),
          color: useColorModeValue('gray.900', 'gray.200')
        }}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  export default Index;