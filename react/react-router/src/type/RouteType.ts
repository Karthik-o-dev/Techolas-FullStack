import type { RouteMap } from "../App";

export type RouteMapType = Exclude<typeof RouteMap[keyof typeof RouteMap], "/profile/:id">