
import Link from 'next/link'

function HomeDesign() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md: py-0    '>
      
      <div className='p-4 relative z-10  w-full text-center'> 
        <h1 className="mt-20 md:mt-0 text-4xl md-text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 " >Childrens Health Data</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Repellendus harum id corporis natus doloribus vero dicta
              veritatis culpa, ullam exercitationem ratione dolores. 
              Iure quam eveniet aliquid eos veritatis cum iusto?</p>

              <div className='mt-4'>
                <Link href={"/Upload_Image"}>Upload_image</Link>
              </div>
        </div>
    </div>
  )
}

export default HomeDesign
