"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
    const displayDirection = direction || (thumbnail ? "column" : "row");
    
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={displayDirection}
                radius="l"
                className={styles.hover + ' ' + styles.blurBg + ' ' + styles.equalHeight}
                mobileDirection="column"
                fillWidth>
                {thumbnail && (
                    <SmartImage
                        priority={false}
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={post.metadata.image || '/images/og/home.jpg'}
                        alt={'Thumbnail of ' + post.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column
                    position="relative"
                    fillWidth 
                    gap="m"
                    padding="l"
                    vertical="center">
                    <Heading
                        as="h2"
                        variant="heading-strong-m"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    {post.metadata.summary && (
                        <Text
                            variant="body-default-m"
                            onBackground="neutral-weak"
                            wrap="balance">
                            {post.metadata.summary}
                        </Text>
                    )}
                    <Flex gap="m" vertical="center" wrap>
                        <Text
                            variant="label-default-s"
                            onBackground="neutral-weak">
                            {formatDate(post.metadata.publishedAt, false)}
                        </Text>
                        {post.metadata.tag && (
                            <Tag
                                label={post.metadata.tag}
                                variant="neutral" 
                                size="s" />
                        )}
                    </Flex>
                </Column>
            </Flex>
        </SmartLink>
    );
}