import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Flex,
  Heading,
  RevealFx,
  Row,
  Text,
} from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Meta, Schema } from "@/once-ui/modules";
import { routes } from "@/app/resources";
import { about, home, newsletter, person } from "@/app/resources/content";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    path: home.path,
  });
}

export default function Home() {
  return (
    <div>
      <Schema
        as="webPage"
        path={home.path}
        title={home.title}
        description={home.description}
        author={{
          name: person.name,
        }}
      />
      {/* Black Hole Video Background */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-[50%] w-[70vw] h-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          height={"100%"}
          width={"100%"}
          className="object-cover mix-blend-screen mask-[radial-gradient(circle,white_20%,transparent_100%)]"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="start"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {home?.stats?.display && (
        <RevealFx translateY="12" delay={0.5} fillWidth>
          <div className="w-full flex flex-wrap justify-center gap-8 py-10 px-6 border border-white/10 rounded-2xl bg-black/10 backdrop-blur-[50px]">
            {home.stats.items.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 flex-1 min-w-[120px]"
              >
                <span className="text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealFx>
      )}
      {home?.highlights?.display && (
        <RevealFx translateY="12" delay={0.6} fillWidth>
          <Column fillWidth gap="m" paddingY="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Key Achievements
            </Heading>
            <Column fillWidth gap="12">
              {home.highlights.items.map((highlight) => (
                <Flex
                  key={highlight}
                  fillWidth
                  gap="12"
                  paddingX="m"
                  paddingY="12"
                  border="brand-alpha-medium"
                  radius="m"
                  background="brand-alpha-weak"
                  vertical="center"
                >
                  <Text variant="body-default-m">{highlight}</Text>
                </Flex>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}
      <RevealFx translateY="16" delay={0.7}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" thumbnail />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </div>
  );
}
