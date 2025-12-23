import { getPosts } from "@/app/utils/utils";
import { Grid, Text } from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
}

export function Posts({
  range,
  columns = "2",
  thumbnail = false,
  direction,
}: PostsProps) {
  const allBlogs = getPosts(["src", "app", "blog", "posts"]);

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 ? (
        <Grid columns={columns} mobileColumns="1" fillWidth gap="l">
          {displayedBlogs.map((post) => (
            <Post
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
            />
          ))}
        </Grid>
      ) : (
        <Text variant="body-default-m" onBackground="neutral-weak">
          No blog posts found.
        </Text>
      )}
    </>
  );
}
