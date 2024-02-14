import Input from '@/components/Input'

export default function page () {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="netflixLogo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 w-full lg:w-2/5 lg:max-w-md p-16 self-center mt-2 rounded-md">
            <h2 className="text-white text-2xl font-semibold mb-8">Sign in</h2>
            <div className="flex flex-col gap-4">
              
              
              <Input />
            
            
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}