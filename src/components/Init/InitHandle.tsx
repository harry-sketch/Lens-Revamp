"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import detectEthereumProvider from "@metamask/detect-provider";
import { useMutation } from "@tanstack/react-query";
import { divergent } from "@/clientConfig/clientConfig";
import { Web3Provider } from "@ethersproject/providers";

// Common
import BasicBtn from "../common/BasicBtn";

// types
import { IInitHandleState } from "@/types/landing.types";
import useLensStore from "@/clientStore";

// Overlay
import Overlay from "../common/Overlay";
import Modal from "../common/Modal";

const InitHandle = () => {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const activeModal = useLensStore((state) => state.activeModal);

  const setAddress = useLensStore((state) => state.setAddress);

  const setActiveModal = useLensStore((state) => state.setActiveModal);

  const IniTHandleData: IInitHandleState[] = [
    {
      text: "Sign in with Lens",
      variant: "primary",
      url: () => handleSignIn.mutate(),
    },
    {
      text: "Claim Lens Handle",
      variant: "secondary",
      url: () => window.open("https://huddle01.com/"),
    },
  ];

  // Funs
  const handleOnClose = () => setActiveModal("close");

  const handleSignIn = useMutation({
    mutationFn: async () => {
      setActiveModal("sigIn");

      try {
        const initResp = await divergent.init("lens");
        console.log({ initResp });

        const _provider = await detectEthereumProvider();

        setIsSignedIn(true);

        if (!_provider) {
          toast.error("cound not found the evm");
          return;
        }

        const provider = new Web3Provider(_provider);

        const address = await provider.send("eth_requestAccounts", []);

        setAddress(address[0]);

        setActiveModal("close");
        router.push("/conference");
      } catch (err) {
        console.log({ err });
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error("Error in singing in");
    },
  });

  return (
    <>
      <div className="flex items-center gap-4 w-1/3">
        {IniTHandleData.map(({ text, url, variant }) => (
          <BasicBtn
            key={`init-btn-${text}`}
            onClick={url}
            text={text}
            variant={variant}
            className="w-60"
            isIcon={variant === "primary" ? false : true}
            type={variant === "primary" ? "" : "arrowSqrOut"}
          />
        ))}
      </div>

      {activeModal === "sigIn" ? (
        <Overlay onClick={() => setActiveModal("close")}>
          <Modal
            title={isSignedIn ? "Signed in Successfully" : "Almost There"}
            desc={
              isSignedIn
                ? "Thank you for signing in. Just a moment, we’re taking you to your garden."
                : "Waiting for you to sign the message in your wallet."
            }
            onClick={handleOnClose}
          />
        </Overlay>
      ) : null}
    </>
  );
};

export default InitHandle;
