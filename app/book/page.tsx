import { Suspense } from "react";
import BookPageContent from "@/components/BookPageContent";

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookPageContent />
    </Suspense>
  );
}
