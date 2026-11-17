import { useParams } from "react-router";
import { useUserQuery } from "../hooks/reactQuery"

export const UserPage = () => {

    const { id } = useParams<{ id: string }>();
    const { data, isError, isLoading } = useUserQuery(Number(id));

    if (isLoading) {
        return <div>...loading</div>
    }

    if (isError) {
        return <div>..console.error();
        </div>
    }

    return <div>{data?.firstName}</div>
}