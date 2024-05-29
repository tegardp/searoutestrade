export default function Post({
    params,
}: {
    params: { postSlug: string };
}) {
    return <h1>Details about product {params.postSlug}</h1>;
}