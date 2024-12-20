import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="px-5 py-2 h-full">

        <div className="w-100 flex justify-end ">
          <h1 >December 2024</h1>
        </div>

        <div className="font-bold text-fluid-xl file:">
          The Office
        </div>
        <div className="font-bold text-fluid-xl leading-3  ">Siren</div>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

          <div className="pt-20 w-40 lg:ml-20" >
            <div>Brands:</div>
            <div> &apos;90s and 2000s <i>Calvin Klein</i> &#44; <i>Dolce &amp; Gabana </i> &amp; <i>Ralph Lauren</i></div>
          </div>

          <div className="relative w-100 h-96">
            <div className="absolute top-0 left-0 w-40 h-40">
              <Image
                src="/hair.png"
                alt="hair"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>

            <div className="absolute top-0 left-0 sm:w-40 md:w-40 lg:w-80 sm:h-300 md:h-300 lg:400 ">
              <Image
                src="/giselle.png"
                alt="giselle"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -0 right-0 z-999 sm:w-40 md:w-40 lg:w-60 sm:h-100 md:h-200 lg:300 ">
              <Image
                src="/bella.png"
                alt="bella hadid"
                width={200}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          <div  >
            <div className="w-30 md:w-full">The <i>office siren</i> style is all about striking the perfect balance between polished professionalism and effortless glamour.</div>

            <div className=" pt-10 lg:pl-10 lg:w-30 md:w-full ">
              It’s a look that mixes tailored pieces like blazers, pencil skirts, and trousers with bold accessories and sleek details that add a touch of personality.
            </div>

            <div className=" pt-10 w-30 md:w-full">The office siren is never afraid to experiment with color, texture, or silhouette, often incorporating unique prints or statement jewelry to elevate her outfit. </div>
          </div>

        </div>
      </main>


      <div className="w-full bottom-0 flex justify-between items-center font-bold p-4 shadow-md">
        <div className="text-2xl">01</div>
        <div>subscribe at www.greychic.com</div>
      </div>
    </>
  );
}
