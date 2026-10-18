"use client";
import { TertiaryButton } from "@/components/ui/primary_button/Button";
import { CopyCheck, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface CopyButton {
  id: string;
}

const CopyButton = ({ id }: CopyButton) => {
  const [clicked, setClicked] = useState(false);

  const Copy = async () => {
    const text: string = document.getElementById(id)?.innerHTML as string;
    try {
      navigator.clipboard.writeText(text);
      setClicked(true);
      toast.success("copiado")
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    } catch (err) {
      console.error("Houve um erro ao copiar o texto", err);
    }
  };

  return (
    <TertiaryButton onClick={() => Copy()}>
      {clicked ? <CopyCheck width={20}/> : <CopyIcon width={20} />}
    </TertiaryButton>
  );
};

export default CopyButton;
