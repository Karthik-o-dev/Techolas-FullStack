import { useParams, useSearchParams } from "react-router"

export const ProfilePage = () => {

    const { id } = useParams<{ id: string }>();
    const [query] = useSearchParams();

    console.log(query.get("id"));

    return <div>ProfilePage - {id} - {query.get("id")}</div>
}