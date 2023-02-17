import DataWrapper from "../../../components/data-wrapper";
import { Suspense } from "react";
import NameLoading from "../../../components/name-loading";

export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   const slugs = ["react", "next", "node"];
//   return slugs.map((slug) => ({
//     name: slug,
//   }));
// }

const Page = ({ params }: { params: { name: string } }) => {
  // const data = await projectSlug(params.name);
  return (
    <Suspense fallback={<NameLoading />}>
      {/* @ts-expect-error Server Component */}
      <DataWrapper name={params.name} />
    </Suspense>
  );
};

export default Page;
