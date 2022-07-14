import { Control, Path, UseFormRegister } from "react-hook-form";


export type InputBaseError = {
  error?: boolean;
  helperText?: string;
};

enum DateTimeInputTypes {
  "datetime-local",
  "date",
  "month",
  "time",
  "week",
}

export const isDatetime = (string: unknown) => {
  return typeof string === "string" && string in DateTimeInputTypes;
};
export type DateTimeInput =
  | "datetime-local"
  | "date"
  | "month"
  | "time"
  | "week";
