import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <section className="h-full lg:h-screen w-full bg-blue1/50 pt-5 lg:pt-28 ">
        <div className="flex flex-col justify-around items-center h-full lg:grid lg:grid-cols-2 ">
          <div className="flex flex-col justify-around items-center h-full">
            <div className="flex flex-row ">
              <h1 data-aos="fade-right" className="text-xl lg:text-6xl">
                Virtus
              </h1>
              <span
                data-aos="fade-left"
                className="text-bluelight text-xl lg:text-6xl"
              >
                DEV
              </span>
            </div>
            <p
              data-aos="fade-up"
              className="mx-10 my-4 text-sm lg:px-40 lg:border-x lg:border-x-blue4/50 sm:text-xs sm:py-10"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              cumque? Maiores, fugit magnam! Unde molestiae tempore tenetur enim
              cumque perferendis ad ut consectetur provident obcaecati dolorum
              sequi dolore, impedit laborum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Vitae reiciendis possimus placeat
              quisquam, veniam, iste quibusdam officiis necessitatibus, maiores
              consectetur cumque rerum assumenda nihil. Numquam, laboriosam! A
              ut dicta nihil.
            </p>
            <div
              data-aos="fade-up"
              className="border border-bluedark h-10 w-40 contain flex items-center justify-center contain-v1 "
            >
              <Link
                className="text-lg text-blue4 hover:text-bluedark "
                href="#"
              >
                En savoir +
              </Link>
            </div>
          </div>
          <div className="h-full py-10 lg:justify-center lg:items-center lg:flex">
            <Image
              data-aos="fade-left"
              src="/images/VirtusDev-Bleu.png"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
