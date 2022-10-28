import type GQLResultInterface from "./faces";
import type { GQLEdgeInterface, GQLNodeInterface } from "./faces";
export declare const setEndpointUrl: (full_GQL_Url: string) => string;
export declare const run: (query: string, variables?: Record<string, unknown> | undefined) => Promise<GQLResultInterface>;
export declare const all: (query: string, variables?: Record<string, unknown> | undefined) => Promise<GQLEdgeInterface[]>;
export declare const tx: (id: string) => Promise<GQLNodeInterface>;
export declare const fetchTxTag: (id: string, name: string) => Promise<string | undefined>;
