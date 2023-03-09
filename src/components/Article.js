import React from "react"
import { useState, useEffect } from "react"
import superagent from "superagent"
import { Container, Flex, chakra, VStack, Grid, Box, Link, Stack, HStack, Divider } from "@chakra-ui/react"
import { Fragment } from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"

const getPosts = async () => {
  const DEV_TO_URL = "https://dev.to/api/articles"

  try {
    const result = superagent
      .get(DEV_TO_URL)
      .query({ username: "shreyaanp" })
      .then(res => {
        return res.body
      })
    return result
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error)
  }
}

const Blog = () => {


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  /*
     Use effect is the old lifecycle equivalent of ComponentDidMount()
     With the added empty array in the second parameter, this will run
     once when the component mounts.
  */

  useEffect(() => {
    getPosts().then(res => {
      // I like to print so I know where things are happening
      console.log("IN USE-EFFECT", res)
      // Set the state using hooks syntax
      setPosts(res)

      // Set loading to false
      setLoading(false)
    })
  }, [])

  // Print the data for easy debugging
  console.log("Posts state", posts)
  const color = useColorModeValue('gray.600', 'gray.300');
  useEffect(() => {
    document.title = "Articles"
}, [])
  return (
    <>

                  <Container maxW="5xl" p={{ base: 5, md: 10 }}>
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    mb={10}
                  >
                    <chakra.h1

                      fontSize={{ base: '3xl', md: '4xl' }}
                      fontWeight="bold"
                      lineHeight="shorter"
                      color={color}
                    >
                      Articles
                    </chakra.h1>
                  </Flex>

              <VStack border="1px solid" borderColor="gray.400" rounded="md" overflow="hidden" spacing={0}>
              {posts.map((post, index) => (
                  <Fragment
                  >
                    <Grid
                      templateRows={{ base: 'auto auto', md: 'auto' }}
                      w="100%"
                      templateColumns={{ base: 'unset', md: '4fr 2fr 2fr' }}
                      p={{ base: 2, sm: 4 }}
                      gap={3}
                      alignItems="center"
                      _hover={{ bg: "white" }}
                    >
                      <Box gridColumnEnd={{ base: 'span 2', md: 'unset' }}>
                        <chakra.h3 as={Link} href={post.canonical_url} isExternal fontWeight="bold" fontSize="lg">
                          {post.title}
                        </chakra.h3>
                        <chakra.p
                          fontWeight="medium"
                          fontSize="xs"
                          color={color}
                        >
                          Published: {post.published_at.slice(0, 10)}
                        </chakra.p>
                        <chakra.p
                          fontWeight="small"
                          fontSize="xs"
                          color={color}
                        >
                         Tags:  {post.tags}
                        </chakra.p>
                        <chakra.p
                          fontWeight="small"
                          fontSize="xs"
                          color={color}
                        >
                        Description : {post.description}
                        </chakra.p>
                      </Box>
                      <HStack
                        spacing={{ base: 0, sm: 3 }}
                        alignItems="center"
                        fontWeight="medium"
                        fontSize={{ base: 'xs', sm: 'sm' }}
                        color={color}
                      >
                        {/* <ArticleStat icon={FaRegComment} value={article.meta.comments} />
                        <ArticleStat icon={FaRegHeart} value={article.meta.reactions} />
                        <ArticleStat icon={FaRegEye} value={article.meta.views} /> */}
                      </HStack>
                      <Stack
                        spacing={2}
                        direction="row"
                        fontSize={{ base: 'sm', sm: 'md' }}
                        justifySelf="flex-end"
                        alignItems="center"
                      >
                        <Link href={post.canonical_url} isExternal>View</Link>
                      </Stack>
                    </Grid>
                    <Divider m={0} />
                  </Fragment>

))}
              </VStack>

            </Container>
      </>
  )
}

// const ArticleStat = ({ icon, value }: { icon: IconType; value: number }) => {
//   return (
//     <Flex p={1} alignItems="center">
//       <Icon as={icon} w={5} h={5} mr={2} />
//       <chakra.span> {value} </chakra.span>
//     </Flex>
//   );
// };

// const ArticleSettingLink = ({ label }: { label: string }) => {
//   return (
//     <chakra.p
//       as={Link}
//       _hover={{ bg: useColorModeValue('gray.400', 'gray.600') }}
//       p={1}
//       rounded="md"
//     >
//       {label}
//     </chakra.p>
//   );
// };

export default Blog;