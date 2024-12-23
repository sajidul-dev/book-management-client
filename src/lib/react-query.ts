/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from "@tanstack/react-query";
import { Promisable } from "type-fest";

export const queryClient = new QueryClient();

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  Promisable<ReturnType<FnType>>;
