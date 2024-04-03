import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ dataCard }) {
  return (
    <ul className={css.list}>
      {dataCard.map((data) => {
        return (
          <li key={data.id}>
            <ImageCard src={data.urls.small} alt={data.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
