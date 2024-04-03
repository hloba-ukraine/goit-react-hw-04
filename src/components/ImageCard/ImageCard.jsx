export default function ImageCard({ src, alt }) {
  return (
    <div>
      <img width="360" height="250" src={src} alt={alt} />
    </div>
  );
}
