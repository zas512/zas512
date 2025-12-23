import { Column, Heading, Text } from "@/once-ui/components";
import { Posts } from "@/components/blog/Posts";
import { blog } from "@/app/resources/content";
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" gap="xl">
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Text
        variant="body-default-l"
        onBackground="neutral-weak"
        marginBottom="xl"
      >
        {blog.description}
      </Text>
      <Posts thumbnail />
    </Column>
  );
}
