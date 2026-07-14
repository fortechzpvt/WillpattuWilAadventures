import { tours } from "@/lib/tours";
import BookPageContent from "@/components/BookPageContent";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function BookSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug) ?? null;
  return <BookPageContent tour={tour} />;
}
