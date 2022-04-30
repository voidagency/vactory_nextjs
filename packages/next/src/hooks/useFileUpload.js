import { useRouter } from "next/router"

export const useFileUpload = () => {
	const router = useRouter()
	return async (filename, binary) =>
		fetch("/api/upload", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Disposition": 'file; filename="' + filename + '"',
				// "Content-Type": "application/octet-stream",
				"x-language": router.locale,
			},
			body: binary,
		})
}
