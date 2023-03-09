import { PropsWithChildren, Fragment } from 'react';
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
  Icon,
  StackProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import {  AiOutlineExclamationCircle, AiFillGithub } from 'react-icons/ai';
import { BsTelephoneX } from 'react-icons/bs';
import {useEffect} from 'react';
import windows from '../../images/windows1.png';
import Task from '../../images/Taskecommerce.png';
import Url from '../../images/url.png';
import Todo from '../../images/Todo app.png';
import Wizzard from '../../images/Wireless Wizzard.png';

interface ProductCardProps {
  id: number;
  title: string;
  detail: string[];
  location: string;
  updated_at: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

const productsList = [
  {
    id: 1,
    title: 'Windows Clone',
    detail: ['HTML', 'CSS', 'Javascsript', 'Firebase'],
    description : "An open source contribution to a Windows Clone.",
    link : "https://windows.shreyaan.codes/",
    image: windows,
  },
  {
    id: 2,
    title: 'Task Ecommerce',
    isFeatured: true,
    detail: ['REACT.js', "Node.js", "NPM", "Context-api"],
    description : "A Front-end Ecommerce Website made using REACT.js framework. Basic frontend CRUD and cart management system implemented using context-api",
    link: "https://task-ecommerce-six.vercel.app/",
    image: Task
  },
  {
    id: 3,
    title: 'URL Shortener',
    isFeatured: true,
    detail: ["Node.js", "HTML", "Firebase-admin", "dotENV"],
    description : "A url shortener made using Node.js and Firebase-admin",
    link : "https://sl.shreyaan.codes/",
    image: Url

  },
  {
    id: 4,
    title: 'Todo app',
    isFeatured: true,
    detail: [ "Node.js","Express.js", "NPM", "Context-api", "Firebase-admin"],
    description : "A Front-end Ecommerce Website made using REACT.js framework. Basic frontend CRUD and cart management system implemented using context-api",
    link : "todo-cm7hsj3x7-shreyaanp.vercel.app",
    image: Todo },
  {
    id: 5,
    title: 'Wireless Wizzard',
    isFeatured: true,
    detail: ["python", "IOT", "Hackathon","HCI", "MPU6050"],
    description : "An IOT project made to control input of computer and have shortcut features ",
    link : "https://wireless-wizard-bcsp4eg2t-shreyaanp.vercel.app/",
    image: Wizzard}
];

const Index = () => {
  useEffect(() => {
    document.title = "Projects"
}, [])
  return (
    <Container maxW="7xl" p={{ base: 5, xs : 6, sm : 7, md :8}} margin="0 auto">
      <Text >
        Projects
      </Text>
      <VStack spacing={4}>
        {productsList.map((product, index) => (
          <Stack
            key={index}
            spacing={{ base: 0, md: 4 }}
            direction={{ base: 'column', md: 'row' }}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{ base: 'auto', md: '2xl' }}
            overflow="hidden"
            pos="relative"
          >
            {product.isFeatured && (
              <Flex
                alignItems="center"
                p={1}
                bg=" green.400"
                pos="absolute"
                fontSize="sm"
                fontWeight="500"
                color="white"
                top={0}
                left={0}
                borderRadius="md"

              >
                <Text>Finished</Text> &nbsp; <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
              </Flex>
            )}
            {!product.isFeatured && (
              <Flex
              alignItems="center"
              p={1}
              bg="red.400"
              pos="absolute"
              fontSize="sm"
              fontWeight="500"
              color="white"
              top={0}
              left={0}
              borderRadius="md"

              >
                <Text>Ongoing</Text> &nbsp; <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
              </Flex>
            )}
            <Flex ml="0 !important">
              <Image
                rounded="md"
                w={{ base: '100%', md: '18rem' }}
                h="auto"
                objectFit="cover"
                src={product.image}
                alt="product image"
              />
            </Flex>
            <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
              <Flex justify="space-between">
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.title}
                </chakra.h3>
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.price}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.location}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, index) => (
                  <Fragment key={index}>
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>{data}</Text>
                    {product.detail.length - 1 != index && (
                      <chakra.span mx={2} fontSize={{ base: 'sm', sm: 'md' }}>
                        |
                      </chakra.span>
                    )}
                  </Fragment>
                ))}
              </Flex>
              <Stack
                direction={{ base: 'column-reverse', sm: 'row' }}
                justify="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                  {product.description}
                </Text>
                <Stack direction="row" spacing={1} mb="0 !important">
                  <IconButton
                    as="a"
                    href={product.link}
                    target="_blank"
                  >
                    <Icon as={AiFillGithub} w={8} h={8}
                    borderRadius={5}
                    />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </VStack>
    </Container>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Index;