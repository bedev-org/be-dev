import React from "react";

const Rgpd = () => {
  return (
    <>
      {" "}
      <div className="confidentialite-container h-screen lg:text-2xl text-6xl">
        <h2>Politique de Confidentialité</h2>
        <br />

        <section>
          <h3>1. Collecte d'Informations Personnelles</h3>
          <br />
          <p>
            Nous collectons des informations personnelles telles que votre nom,
            votre adresse e-mail, etc., de manière volontaire et avec votre
            consentement.
          </p>
          <br />
        </section>

        <section>
          <h3>2. Utilisation des Informations</h3>
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
          <h3>6. Droits d'Accès et de Modification</h3>
          <br />
          <p>
            Vous avez le droit d'accéder, de modifier ou de supprimer vos
            informations personnelles en nous contactant via les coordonnées
            fournies dans la section "Contact" de notre site.
          </p>
          <br />
        </section>

        <section>
          <h3>7. Modifications de la Politique de Confidentialité</h3>
          <br />{" "}
          <p>
            Nous nous réservons le droit de modifier cette Politique de
            Confidentialité à tout moment. Les modifications seront effectives
            dès leur publication sur le site.
          </p>
          <br />
        </section>

        <section>
          <h3>8. Consentement</h3>
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
export default Rgpd;
