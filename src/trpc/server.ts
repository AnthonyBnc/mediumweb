import "server-only";

import { headers } from "next/headers";
import { cache } from "react";
import { createCaller } from "~/server/api/root";

import { createTRPCContext } from "~/server/api/trpc";
import type { NextApiRequest, NextApiResponse } from 'next';
import { unknown } from "zod";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

    const req = { headers: heads } as unknown as NextApiRequest;
  const res = {} as NextApiResponse;

  return createTRPCContext({
    req,
    res,
  });
});

export const api = createCaller(createContext);
