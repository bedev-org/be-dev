import React from "react";
import { BsMailbox } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section>
      <div className="px-4 py-2 bg-bluedark w-full">
        <h1 className="flex justify-center py-4 font-extrabold font">
          contact
        </h1>
        <div className="lg:grid lg:grid-cols-3">
          <div className="contain2 my-4 mx-4 pb-2 px-4 ">
            <h2 className="flex justify-center px-4 py-2 font-bold">
              Maxence D
            </h2>
            <p className="flex justify-center text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              error, enim expedita eveniet sunt beatae dicta explicabo
              distinctio ipsam ab at, hic omnis a id quae quod vero facere
              alias.
            </p>
            <div>
              <div className="lg:grid lg:grid-cols-2">
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsDiscord size={30} />
                  <p className="px-2">#blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsMailbox size={30} />
                  <p className="px-2">blabla@gmail.com</p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2">
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsGithub size={30} />
                  <p className="px-2">@blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsLinkedin size={30} />
                  <p className="px-2">@blablabla</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 mx-4 pb-2 px-4 contain3">
            <h3 className="flex justify-center text-center px-4 py-2 font-bold">
              Gautier Gourdy
            </h3>
            <p className="flex justify-center text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              blanditiis debitis dolor odit error, sed provident asperiores
              sapiente commodi harum dignissimos iusto velit, porro ipsam
              soluta. Voluptas vitae nobis aperiam.
            </p>
            <div>
              <div className="lg:grid lg:grid-cols-2">
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsDiscord size={30} />
                  <p className="px-2">#blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsMailbox size={30} />
                  <p className="px-2">blabla@gmail.com</p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2">
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsGithub size={30} />
                  <p className="px-2">@blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsLinkedin size={30} />
                  <p className="px-2">@blablabla</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 mx-4 px-4 pb-2 contain4 ">
            <h4 className="flex justify-center text-center px-4 py-2 font-bold ">
              Redouane Z
            </h4>
            <p className="flex justify-center text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              doloribus quam est similique? Odio praesentium molestiae harum
              officiis consectetur ullam consequatur. Id quaerat maiores
              voluptatibus iste laudantium tempore, ullam eum!
            </p>
            <div>
              <div className="lg:grid lg:grid-cols-2 mx-1 my-1">
                <div className="flex justify-center align-items">
                  <BsDiscord size={30} />
                  <p className="px-2">#blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsMailbox size={30} />
                  <p className="px-2">blabla@gmail.com</p>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 mx-1 my-1">
                <div className="flex justify-center align-items">
                  <BsGithub size={30} />
                  <p className="px-2">@blabla</p>
                </div>
                <div className="flex justify-center align-items mx-1 my-1">
                  <BsLinkedin size={30} />
                  <p className="px-2">@blablabla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
