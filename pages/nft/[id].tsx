import React from "react";
import Image from "next/image";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Collection } from "../../typings";
import Link from "next/link";

type Props = {
  collection: Collection;
};

const NFTDropPage = ({ collection }: Props) => {
  // * Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // * ----

  return (
    <>
      <Head>
        <title>Ape NFT</title>
      </Head>
      <div className="flex w-full flex-col lg:grid lg:grid-cols-10">
        <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            {/* <div className="w-44 rounded-xl object-cover lg:h-96 lg:w-72">
          <Image
            layout="responsive"
            width={"100%"}
            height={"100%"}
            src={"https://links.papareact.com/8sg"}
          />
        </div> */}

            <div className="mt-4 p-2 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600">
              <img
                className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                src={urlFor(collection.previewImage).url()}
                alt=""
              />
            </div>
            <div className="space-y-2 p-5 text-center">
              <h1 className="text-4xl font-bold text-white">
                {collection.nftCollectionName}
              </h1>
              <h2 className="text-xl text-gray-300">
                {collection.description}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <Link href={"/"}>
              <h1 className="w-full cursor-pointer text-xl font-extralight sm:w-80">
                <span className="font-extrabold underline decoration-pink-600/50">
                  Dew's
                </span>{" "}
                NFT Market Place
              </h1>
            </Link>
            <button
              onClick={() => (address ? disconnect() : connectWithMetamask())}
              className="mt-2 sm:mt-0 rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            >
              {address ? "Sign Out" : "Sign In"}
            </button>
          </header>
          <hr className="my-2 border" />
          {address && (
            <p className="text-center text-rose-400 text-sm sm:text-start">
              You are logged in with wallet {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </p>
          )}

          <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:col-span-6 lg:space-y-0 lg:justify-center">
            <img
              className="w-80 object-cover lg:h-40 pb-10"
              src={urlFor(collection.mainImage).url()}
              alt=""
            />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              {collection.title}
            </h1>
            <p className="pt-2 text-xl text-green-500">13/21 NFT's claimed</p>
          </div>

          <button className="mt-10 font-bold h-16 w--full bg-red-600 text-white rounded-full">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </>
  );
};

export default NFTDropPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
      asset
    },
    previewImage {
      asset
    },
    slug {
      current
    },
    creator-> {
      _id,
      name,
      address,
      slug {
        current
      },
    },
  }`;

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collection,
    },
  };
};
