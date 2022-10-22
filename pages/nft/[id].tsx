import React from "react";
import Image from "next/image";

type Props = {};

const NFTDropPage = (props: Props) => {
  return (
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

          <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Apes NFT</h1>
            <h2 className="text-xl text-gray-300">A Collections of Apes</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDropPage;
