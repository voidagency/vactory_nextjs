import { domToReact } from "html-react-parser"
// import { Element } from "domhandler/lib/node"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"

const options = {
  replace: (domNode) => {
    if (domNode.name === "img") {
      const { src, alt, width, height } = domNode.attribs

      return (
        <Image
          src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
          width={`${width}px`}
          height={`${height}px`}
          alt={alt}
          layout="intrinsic"
          objectFit="cover"
        />
      )
    }

    if (domNode.name === "a") {
      const { href, class: className } = domNode.attribs

      return (
        <Link href={href} passHref>
          <a className={className}>{domToReact(domNode.children)}</a>
        </Link>
      )
    }
  },
}

export function Wysiwyg({ html }) {
  return <>{parse(html, options)}</>
}
