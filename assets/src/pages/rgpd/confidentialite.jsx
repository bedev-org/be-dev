import React from "react";
import NavbarDesktop from"../../pages/components/layouts/header/desktop/index";
import FooterDesktop from "../../../src/components/layouts/footer/desktop/index";

const Confidentialite = () => {
  return (
    <>
      <NavbarDesktop />
      <div className="confidentialite-container  lg:text-2xl  ">
        <div className="grid justify-items-center ">
          <h1 className="text-6xl py-6">Politique de Confidentialité</h1>
        </div>
        <br />

        <section >
          <h2 className="text-3xl">1. Collecte d'Informations Personnelles</h2>
          <br />
          <p className="text-justify mx-10">
            Nous collectons des informations personnelles telles que votre nom,
            votre adresse e-mail, etc., de manière volontaire et avec votre
            consentement.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-3xl">2. Utilisation des Informations</h2>
          <br />
          <p className="text-justify mx-10 ">
            Les informations collectées peuvent être utilisées pour fournir et
            personnaliser nos services, répondre à vos demandes, et vous envoyer
            des informations pertinentes.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-3xl">6. Droits d'Accès et de Modification</h2>
          <br />
          <p className="text-justify mx-10 ">
            Vous avez le droit d'accéder, de modifier ou de supprimer vos
            informations personnelles en nous contactant via les coordonnées
            fournies dans la section "Contact" de notre site.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-3xl">
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
          <h2 className="text-3xl">8. Consentement</h2>
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
