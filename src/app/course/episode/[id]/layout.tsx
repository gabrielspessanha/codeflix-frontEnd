import { Footer } from "@/components/common/footer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Codeflix - Episodio",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
