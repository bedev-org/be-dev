import React from "react";

const Confidentialite = () => {
  return (
    <>
      <div className="confidentialite-container h-screen lg:text-2xl text-6xl">
        <div className="grid justify-items-center">
          <h1 className=" text-9xl">Politique de Confidentialité</h1>
        </div>
        <br />

        <section>
          <h2 className="text-3xl">1. Collecte d'Informations Personnelles</h2>
          <br />
          <p>
            Nous collectons des informations personnelles telles que votre nom,
            votre adresse e-mail, etc., de manière volontaire et avec votre
            consentement.
          </p>
          <br />
        </section>

        <section>
          <h2 className="text-3xl">2. Utilisation des Informations</h2>
          <br />
          <p>
            Les informations collectées peuvent être utilisées pour fournir et
            personnaliser nos services, répondre à vos demandes, et vous envoyer
            des informations pertinentes.
          </p>
          <br />
        </section>

        {/* ... (Les autres sections restent inchangées) */}

        <section>
          <h2 className=" text-3xl">6. Droits d'Accès et de Modification</h2>
          <br />
          <p>
            Vous avez le droit d'accéder, de modifier ou de supprimer vos
            informations personnelles en nous contactant via les coordonnées
            fournies dans la section "Contact" de notre site.
          </p>
          <br />
        </section>

        <section>
          <h2 className=" text-3xl">
            7. Modifications de la Politique de Confidentialité
          </h2>
          <br />{" "}
          <p>
            Nous nous réservons le droit de modifier cette Politique de
            Confidentialité à tout moment. Les modifications seront effectives
            dès leur publication sur le site.
          </p>
          <br />
        </section>

        <section>
          <h2 className=" text-3xl">8. Consentement</h2>
          <br />
          <p>
            En utilisant notre site, vous consentez à notre Politique de
            Confidentialité.
          </p>
          <br />
        </section>

        <p>Fait à Meaux, le 02/11/2023.</p>
      </div>
    </>
  );
};

export default Confidentialite;
