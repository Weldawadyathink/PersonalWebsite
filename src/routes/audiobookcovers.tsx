import { NavBar } from "@/components/NavBar";
import { Heading } from "@/components/General";
import { Separator } from "@/components/ui/separator";

export default function AudiobookCovers() {
  return (
    <>
      <NavBar />

      <div className="container max-w-2xl mx-auto p-6">
        <Heading className="text-center">
          <a href="https://audiobookcovers.com" target="_blank">
            AudiobookCovers.com
          </a>
        </Heading>
        <Separator className="my-6" />
      </div>
    </>
  );
}
