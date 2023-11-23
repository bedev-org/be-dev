import React from "react";
import NavbarDesktop from "../../pages/components/layouts/header/desktop/index";
import FooterDesktop from "../../../src/components/layouts/footer/desktop/index";

const Confidentialite = () => {
  return (
    <>
      <NavbarDesktop />
      <div
        style={{
          backgroundImage:
            ' url("https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVyeXxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="min-h-screen flex justify-center"
      >
        <div className="flex flex-col text-center justify-center items-center max-w-7xl whitebedev-text font-bold ">
          <div className="text-2xl lg:text-3xl font-medium title-font  mx-96 text-black yellowbedev p-6 rounded-md shadow-lg">
            <h1 class="text-xl uppercase">Politique de confidentialité</h1>
          </div>
        </div>
      </div>
      <div className="blackbedev text-white p-10">
        <section>
          <h2 className="text-2xl">1. Collecte d'Informations Personnelles</h2>
          <br />
          <p className="text-justify mx-10">
            Nous collectons des informations personnelles telles que votre nom,
            votre adresse e-mail, etc., de manière volontaire et avec votre
            consentement.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-2xl">2. Utilisation des Informations</h2>
          <br />
          <p className="text-justify mx-10 ">
            Les informations collectées peuvent être utilisées pour fournir et
            personnaliser nos services, répondre à vos demandes, et vous envoyer
            des informations pertinentes.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-2xl">6. Droits d'Accès et de Modification</h2>
          <br />
          <p className="text-justify mx-10 ">
            Vous avez le droit d'accéder, de modifier ou de supprimer vos
            informations personnelles en nous contactant via les coordonnées
            fournies dans la section "Contact" de notre site.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-2xl">
            7. Modifications de la Politique de Confidentialité
          </h2>
          <br />
          <p className="text-justify  mx-10">
            Nous nous réservons le droit de modifier cette Politique de
            Confidentialité à tout moment. Les modifications seront effectives
            dès leur publication sur le site.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-2xl">8. Consentement</h2>
          <br />
          <p className="mx-10">
            En utilisant notre site, vous consentez à notre Politique de
            Confidentialité.
          </p>
          <br />
        </section>

        <p className="py-6 mx-10">Fait à Meaux, le 02/11/2023.</p>
      </div>
      <FooterDesktop />
    </>
  );
};

export default Confidentialite;
