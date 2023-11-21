import React from "react";
import NavbarDesktop from"../../pages/components/layouts/header/desktop/index";
import FooterDesktop from "../../../src/components/layouts/footer/desktop/index";

const LegalNotice = () => {
  return (
    <>
    <NavbarDesktop/>
      <div className="mentions-legales-container lg:text-xl  ">
        <div className="grid justify-items-center">
          <h1 className=" text-6xl py-6">Mentions Légales</h1>
        </div>
        <br />
        <section>
          <h3 className="text-3xl">1. Éditeur du Site</h3>
          <br />
          <p>Nom de l'entreprise : BE-DEV</p>
          <br />
          <p>Forme juridique : [Forme juridique]</p>
          <br />
          <p>Adresse : 30 Bd du Chevalier Bayard </p>
          <br />
          <p>Numéro de téléphone : +33 7 00 00 00 00 </p>
          <p>Email : contact@be-dev.org</p>
          <br />
        </section>

        <section className="py-6">
          <h3 className="text-3xl ">2. Directeur de la publication</h3>
          <br />
          <p>Nom : Enrick PAYET</p>
          <br />
        </section>

        <section>
          <h3 className="text-3xl text-justify">3. Hébergeur du Site</h3>
          <br />
          <p>Raison sociale : [Nom de l'hébergeur]</p>
          <br />
          <p>Adresse : [Adresse de l'hébergeur]</p>
          <br />
          <p>Numéro de téléphone : [Numéro de téléphone de l'hébergeur]</p>
          <br />
          <p>Email : [Adresse e-mail de l'hébergeur]</p>
          <br />
        </section>

        <section className="pt-6">
          <h3 className="text-3xl text-justify">4. Propriété Intellectuelle</h3>
          <br />
          <p>
            Le site et son contenu, y compris les textes, images et fichiers
            JSX, sont la propriété exclusive de BE-DEV, sauf indication
            contraire. Toute reproduction ou utilisation sans autorisation
            préalable est strictement interdite. Nous nous engageons à protéger
            la propriété intellectuelle et à prendre des mesures légales contre
            toute utilisation non autorisée.
          </p>
          <br />
        </section>

        <section>
          <h3 className="text-3xl text-justify">5. Collecte de Données Personnelles</h3>
          <br />
          <p>
            Les informations personnelles collectées sur ce site sont destinées
            à BE-DEV et ne seront en aucun cas cédées ou vendues à des tiers.
            Conformément à la loi, vous disposez d'un droit d'accès, de
            rectification et de suppression de vos données. Votre vie privée est
            importante pour nous, et nous nous engageons à protéger vos
            informations personnelles conformément aux normes de
            confidentialité.
          </p>
          <br />
        </section>

        <section>
          <h3 className="text-3xl text-justify">6. Cookies</h3>
          <br />
          <p>
            Ce site peut utiliser des cookies pour améliorer l'expérience
            utilisateur. En continuant à naviguer sur le site, vous acceptez
            l'utilisation de ces cookies. Les cookies sont utilisés pour
            personnaliser votre expérience en ligne et analyser la manière dont
            vous interagissez avec notre site.
          </p>
          <br />
        </section>

        <section>
          <h3 className="text-3xl text-justify">7. Responsabilité</h3>
          <br />
          <p>
            BE-DEV ne peut être tenu responsable des dommages directs ou
            indirects résultant de l'utilisation de ce site ou de
            l'impossibilité de l'utiliser. Nous mettons tout en œuvre pour
            garantir la disponibilité et la sécurité du site, mais nous ne
            pouvons garantir l'absence totale d'erreurs ou d'interruptions.
          </p>
          <br />
        </section>

        <section>
          <h3 className="text-3xl text-justify">8. Loi Applicable</h3>
          <br />
          <p>
            Les présentes mentions légales sont soumises au droit [indiquer la
            juridiction applicable]. Tout litige découlant de l'utilisation de
            ce site sera soumis à la juridiction compétente de la région
            spécifiée dans les lois en vigueur.
          </p>
          <br />
        </section>

        <p>Fait à Meaux, le 02/11/2020.</p>
      </div>
      <FooterDesktop/>
    </>
  );
};
export default LegalNotice;
