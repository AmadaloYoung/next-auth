import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="font-serif text-xl antialiased hover:subpixel-antialiased not-italic hover:italic font-semibold">
        Hello Auth!
      </p>
      <Button variant="outline">Click me</Button>
    </>
  );
}
