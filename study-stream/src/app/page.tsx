import { Button } from "@/components/ui/button";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-9xl text-center">
          The <span className="text-red-600">StudyStream</span> platform.
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewriterTitle />
        </h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-red-600 text-white round">
              Get Started
              <ArrowRight
                className="ml-2 w-5  h-5"
                strokeWidth={3}
              ></ArrowRight>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
