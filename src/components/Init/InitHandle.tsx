"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Common
import BasicBtn from "../common/BasicBtn";

// types
import { IInitHandleState } from "@/types/landing.types";
import useClientStore from "@/clientStore";

// Overlay
import Overlay from "../common/Overlay";
import Modal from "../common/Modal";

const InitHandle = () => {
  const router = useRouter();

  const isSignedIn = true;

  const activeModal = useClientStore((state) => state.activeModal);

  const setActiveModal = useClientStore((state) => state.setActiveModal);

  const IniTHandleData: IInitHandleState[] = [
    {
      text: "Sign in with Lens",
      variant: "primary",
      url: async () => {
        try {
          setActiveModal("sigIn");
          setTimeout(() => {
            router.push("/conference");
          }, 2000);
        } catch (err) {
          console.log(err);
          toast.error(
            "There was a problem in signing in with your wallet, please try again."
          );
        }
      },
    },
    {
      text: "Claim Lens Handle",
      variant: "secondary",
      url: () => window.open("https://huddle01.com/"),
    },
  ];

  // Funs
  const handleOnClose = () => useCallback(() => setActiveModal("close"), []);

  return (
    <>
      <div className="flex items-center gap-4">
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
