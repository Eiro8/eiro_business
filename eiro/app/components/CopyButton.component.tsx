"use client";
import { Button, SecondaryButton, TertiaryButton } from "@/components/ui/primary_button/Button";
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
      toast.success("Texto Copiado")
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    } catch (err) {
      console.error("Houve um erro ao copiar o texto", err);
    }
  };

  return (
    <button className="p-1 flex hover:black/30 hover:cursor-pointer rounded-full hover:bg-blue-500/40 transition-all duration-300" onClick={() => Copy()} aria-label="Clique para copiar">
      {clicked ? <CopyCheck  width={15} height={15} className="text-black dark:text-white"/> : <CopyIcon width={15} height={15} className="text-black dark:text-white" />}
    </button>
  );
};

export default CopyButton;
