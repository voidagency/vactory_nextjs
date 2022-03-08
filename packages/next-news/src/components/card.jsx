import { Card } from "@vactory/ui"
import Image from "next/image"

const CardImage = ({ image, imageSettings, alt = "", ...rest }) => {
  return (
    <div style={{ position: "relative", height: "250px" }}>
      <Image
        src={image?._default}
        alt={alt}
        height={500}
        //   layout="responsive"
        layout="fill"
        //   className="h-48 w-full object-cover"
        {...rest}
      />
    </div>
  )
}

export const NewsCard = ({
  title,
  excerpt,
  image,
  url,
  category,
  imageSettings,
  date,
}) => {
  return (
    <Card
      title={title}
      excerpt={excerpt}
      image={
        <CardImage imageSettings={imageSettings} image={image} alt={title} />
      }
      url={url}
      category={category}
      date={date}
    />
  )
}
