import { PostsProps } from 'types'
import {
  Box, Container, Divider, Heading, HStack, Image, Link, Tag, Text, useColorModeValue, VStack, Wrap,
  WrapItem,
} from '@chakra-ui/react'


interface BlogAuthorProps {
  date: Date
  name: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
      <Image
        borderRadius='full'
        boxSize='40px'
        src='https://100k-faces.glitch.me/random-image'
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight='medium'>{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}


export function BlogTags({ tags }: { tags:string[]}) {
  return (
    <HStack spacing={2} marginTop={3}>
      {tags.map(tag => 
        <Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
          {tag}
        </Tag>
      )}
    </HStack>
  )
}


export default function ArticleList({ posts }: PostsProps) {

  const bgGradient = useColorModeValue( 'radial(orange.600 1px, transparent 1px)', 'radial(orange.300 1px, transparent 1px)')
  const color = useColorModeValue('gray.700', 'gray.200')

  return (
    <Container maxW={'7xl'} p='12'>
      <Heading as='h2'>
          Welcome to my blog
      </Heading>
      <Text>
        Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.
      </Text>

      {posts.map(post =>
        <>
          <Box
            marginTop={{ base: '1', sm: '5' }}
            display='flex'
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent='space-between'>
            <Box
              display='flex'
              flex='1'
              marginRight='3'
              position='relative'
              alignItems='center'>
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex='2'
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop='5%'>
                <Link href={`/post/${post.slug}`}>
                  <Image
                    borderRadius='lg'
                    src={
                      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt={post?.frontmatter.imageAlt}
                    objectFit='contain'
                  />
                </Link>
              </Box>
              <Box zIndex='1' width='100%' position='absolute' height='100%'>
                <Box
                  bgGradient={bgGradient}
                  backgroundSize='20px 20px'
                  opacity='0.4'
                  height='100%'
                />
              </Box>
            </Box>
          </Box>

          <Box
            display='flex'
            flex='1'
            flexDirection='column'
            justifyContent='center'
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Engineering', 'Product']} />
            <Heading marginTop='1'>
              <Link href={`/post/${post.slug}`}>
                {post?.frontmatter?.title}
              </Link>
            </Heading>
            <Text
              as='p'
              marginTop='2'
              color={color}
              fontSize='lg'
              isTruncated={true}
            >
              {post?.markdownBody}
            </Text>
            <BlogAuthor name={post?.author} date={new Date(post?.frontmatter?.date)} />
          </Box>
        </>
      )}

      

      <Heading as='h3' marginTop='5'>
        Latest articles
      </Heading>
      <Divider marginTop='5' />
      <Wrap spacing='30px' marginTop='5'>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                hej
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name='John Doe'
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
        <Heading as='h2'>What we write about</Heading>
        <Text as='p' fontSize='lg'>
        </Text>
        <Text as='p' fontSize='lg'>
          lit.
        </Text>
        <Text as='p' fontSize='lg'>
          Lorem
        </Text>
      </VStack>
    </Container>
  )
}


