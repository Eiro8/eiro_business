"use client";

import React, { useState } from "react";
import { TertiaryButton, SecondaryButton, Button } from "@/components/ui/primary_button/Button";
import { MoreVertical,Moon,Sun,Accessibility, Contact } from "lucide-react";

export const ConfigToggle = () => {
  const isDark = useState(window.matchMedia("prefers-color-scheme: dark").matches)

  return (
    <>
      <SecondaryButton>
        {<Contact width={"24px"} />}
        <p>Entre em contato conosco</p>
      </SecondaryButton>
      <div className="flex flex-col">
        <TertiaryButton>{<MoreVertical />}</TertiaryButton>
        <span className="opacity-0 absolute pointer-events-none">
          <Button>{<Moon width={"24px"} />}</Button>
          <Button>{<Accessibility width={"24px"} />}</Button>
        </span>
      </div>
    </>
  );
};
