import { Column } from "@/once-ui/components";
import { work } from "@/app/resources/content";
import { Meta } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Projects />
    </Column>
  );
}
