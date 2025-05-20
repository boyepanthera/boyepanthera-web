// app/fonts.js
import localFont from "next/font/local";

// Define the primary font (PPNeueMachina)
export const neueMachina = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMachina-InktrapLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapUltrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapUltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-neue-machina",
});

// Plain variant as secondary font
export const neueMachinaPlain = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMachina-PlainLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-PlainLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMachina-PlainRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-PlainRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMachina-PlainUltrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-PlainUltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-neue-machina-plain",
});
