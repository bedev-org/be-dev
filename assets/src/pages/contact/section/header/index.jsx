const contact = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage:
              ' url("https://lafibre.info/images/datacenter/201305_datacenter_google_LNR_003.jpg")',
          }}
          class="flex justify-center border rounded-lg p-5 md:p-20 lg:p-36 backgroundImageClass"
        >
          <div class="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
            <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-md shadow-lg">
              <h1 class="text-base font-medium  ">Bienvenue chez Be-dev</h1>
              <span class="underline underline-offset-2 blackbedev-text -mt-3">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              </span>
              <div class="flex flex-col whitebedev-text mt-5">
                <h1 class="text-4xl md:text-[50px] font-semibold">
                  Be-dev.org
                </h1>
                <p class="text-xl mt-2 md:mt-4 inline-block px-2">
                  Noms de domaine - Bases de données - Serveurs
                </p>
              </div>
            </div>
            <p class="mt-20 text-sm md:w-[52%] tracking-wide leading-7 blackbedev rounded-md g:text-xl  p-6">
            Si vous souhaitez un devis ou si vous avez besoin de plus d'informations, n'hésitez pas à utiliser le formulaire ci-dessous. Notre équipe sera prête à répondre à toutes vos questions. Nous nous engageons à traiter votre  avec diligence et précision. Chez nous, votre besoin est notre motivation, et nous sommes impatients de vous fournir le service exceptionnel que vous méritez."
            </p>
            <div class="flex mt-20 space-x-5">
              <div>
                <Link
                  to="/services"
                  class="whitebedev yellowbedev-text px-6 py-2 font-semibold"
                >
                  En savoir +
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  class="yellowbedev text-white px-6 py-2 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        /
      </section>
    </>
  );
};

export default contact;
