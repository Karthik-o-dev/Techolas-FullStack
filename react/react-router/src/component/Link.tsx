import { Link, type LinkProps } from "react-router"
import type { RouteMapType } from "../type/RouteType"

type TLinkProps = Omit<LinkProps, "to"> & {
    to: RouteMapType
}

export const TypedLink = (props: TLinkProps) => {
    return <Link {...props} />
}