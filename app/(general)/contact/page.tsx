import  type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contacto',
 description: 'COntacto',
};
const page = () => {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-3xl flex justify-center">CONTACT</span>
    </main>
  )
}

export default page