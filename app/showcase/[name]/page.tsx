import Cards from "./cards";
import { projectSlug } from "../../../lib/queries";

export async function generateStaticParams() {
  const slugs = ["react", "next", "node"];
  return slugs.map((slug) => ({
    name: slug,
  }));
}

const Page = async ({ params }: { params: { name: string } }) => {
  const data = await projectSlug(params.name);
  return (
    <div className="flex justify-start w-full h-full sm:px-12 px-5 mt-5">
      <Cards data={data} />
    </div>
  );
};

export default Page;
