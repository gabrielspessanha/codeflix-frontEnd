import { Footer } from "@/components/common/footer"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: 'Codeflix - Home',
}
 
export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  )
}