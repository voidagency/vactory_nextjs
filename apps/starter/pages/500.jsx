import Error from "next/error";

export default function Custom500() {
	return <Error statusCode={500} />;
}
