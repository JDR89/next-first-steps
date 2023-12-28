import Navbar from "@/components/navbar/Navbar"


const GeneralLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col items-center p-24">layout hijo
      {children}
    </main>
    </>
    
  )
}

export default GeneralLayout