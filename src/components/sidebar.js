import { Link as ReachLink } from 'react-router-dom';
import {useState, useContext} from 'react';
import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Link,
    Button,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import {AiOutlineRead, AiOutlineHome,AiOutlineUser,AiOutlineCode,AiOutlineGithub,AiOutlineTrophy,AiOutlineAudit  } from 'react-icons/ai';
  import React from 'react';
  import Infocard from './infocard/infocard';
  import Timeline from './timeline';
  import Aboutme from './Aboutme';
  import Projects from './project/project';
  import Education from './education';
  import Achievements from './Achievement';
  import Articles from './Article';
  import Skill from './skill';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import Typewriter from 'typewriter-effect';
  import Context from '../Context';
  import Avatarimg from '../images/avatar.png'

export default function Sidebar() {
    const color1 = useColorModeValue('gray.100', 'gray.900');
    const color2 = useColorModeValue('brand.100', 'brand.900');
    const {item} = useContext(Context);

    const {setContextItem} = useContext(Context);

    return (
      <>

      <VStack h="full" w="full" alignItems="flex-start" justify="space-between" >
      <Box w="full">
        <Flex px="4" py="5" align="center">
          <Text
            fontSize="xl"
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

            onClick={() => setContextItem(<Infocard/>) }
            px="4"
            py="3"
            rounded="md"
            _hover={{
              textDecoration: 'none',
              bg: color1
            }}
            _activeLink={{
              bg: color2
            }}
          >
            <Flex align="center" gridGap="4"

            >
              <Icon as={AiOutlineHome} />
              <Text fontWeight="medium">Home</Text>
            </Flex>
          </Link>
          <Link
            onClick={() => setContextItem(<Aboutme/>)}
            px="4"
            py="3"
            rounded="md"
            _hover={{
              textDecoration: 'none',
              bg: color1
            }}
            _activeLink={{
              bg: color2
            }}
          >
            <Flex align="center" gridGap="4"

            >
              <Icon as={AiOutlineUser} />
              <Text fontWeight="medium">About</Text>
            </Flex>
</Link>
<Link

onClick={() => setContextItem(<Skill/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
}}
>
<Flex align="center" gridGap="4">
<Icon as={AiOutlineCode} />
<Text fontWeight="medium">Skills</Text>
</Flex>
</Link>
<Link
onClick={
()=>setContextItem(<Projects/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
}}
>
<Flex align="center" gridGap="4">
<Icon as={AiOutlineGithub} />
<Text fontWeight="medium">Project</Text>
</Flex>
</Link>
<Link
// on click set context item to be <timeline/>
onClick={()=>setContextItem(<Achievements/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
}}
>
<Flex align="center" gridGap="4">
<Icon as={AiOutlineTrophy} />
<Text fontWeight="medium">Achievements</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Timeline/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
}}
>
<Flex align="center" gridGap="4"
>
<Icon as={AiOutlineAudit} />
<Text fontWeight="medium">Experience</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Education/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
}}
>
<Flex align="center" gridGap="4">
<Icon as={AiOutlineRead} />
<Text fontWeight="medium">Education</Text>
</Flex>
</Link>
<Link
onClick={()=>setContextItem(<Articles/>)}
px="4"
py="3"
rounded="md"
_hover={{
textDecoration: 'none',
bg: color1
}}
_activeLink={{
bg: color2
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
              src={Avatarimg}
            />
          </MenuButton>
          <Text ml={2} fontSize={17}>
              Shreyaan Pradhan <ChevronDownIcon />
            </Text>
          <MenuList fontSize={17} zIndex={5555}>
            <Link
              href="https://github.com/Shreyaanp"
              isExternal
            >
            <MenuItem
            >
              Github
            </MenuItem>
            </Link>
            <Link
            href="https://www.linkedin.com/in/shreyaan-pradhan/ "
            isExternal
          >
            <MenuItem as={Link} to="#">
              Linkedin
            </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
    </>

    )
}