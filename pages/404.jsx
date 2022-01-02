import { useRouter } from "next/router"
import Link from 'next/link'
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  console.log(router);
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])

  return (
    <div>
      <h1>Error page not found</h1>
      <Link href="/">
        <a >Go home</a>
      </Link>
    </div>
  )
}

export default Error
