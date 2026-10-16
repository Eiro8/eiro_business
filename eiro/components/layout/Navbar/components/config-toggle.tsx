"use client";

import React, { useState } from "react";
import { TertiaryButton, Button } from "@/components/ui/primary_button/Button";
import { MoreVerticalIcon, Accessibility } from "lucide-react";

export const ConfigToggle = () => {
  const [open, setOpen] = useState<boolean>(false);

  function options_toggle() {
    setOpen(!open);
  }
  return (
    <div
      className={`
        relative h-full border-2 border-transparent
        transition-colors duration-300
        ${open ? "box-border border-white" : ""}`}
    >
      <TertiaryButton
        aria-label={`${open ? "Fechar" : "Abrir"} Configurações`}
        onClick={options_toggle}
      >
        {<MoreVerticalIcon />}
      </TertiaryButton>
      <div
        className={`
          gap-2 flex flex-col
          absolute p-5 box-content
          bg-gray-300 dark:bg-blue-950
          translate-y-8
          -right-full] -translate-x-3/6
          rounded-md

          after:content-[''] after:absolute
          after:w-[15px] after:h-[15px]
          after:-top-[7px] after:left-3/5
          after:rotate-45
          after:bg-inherit

          invisible opacity-0
          transition-all duration-250
          ${open ? "visible opacity-100" : ""}
          `}
      >
        <Button>{<Accessibility width={"24px"} />}</Button>
        <Button>{<Accessibility width={"24px"} />}</Button>
        <Button>{<Accessibility width={"24px"} />}</Button>
        <Button>{<Accessibility width={"24px"} />}</Button>
        <Button>{<Accessibility width={"24px"} />}</Button>
      </div>
    </div>
  );
};
