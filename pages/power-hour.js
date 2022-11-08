import { useRouter } from 'next/router'

export default function PowerHour() {
  const router = useRouter()
  console.log(router.query);

  if (router.query.code) {
    const baseUri = "comtylerjpowerhour://oauth-callback/spotify"
    const uri = baseUri + "?code=" + router.query.code
    window.location.href = uri
  }

  return <></>;
}