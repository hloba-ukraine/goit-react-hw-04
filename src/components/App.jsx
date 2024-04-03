import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const options = {
    per_page: 12,
    page: page,
  };

  const instance = axios.create({
    baseURL: "https://api.unsplash.com/search",
  });
  const API_KEY = "s87vf_i1heNu3dltJw-UXqI5GjUEBWPN_NCltfneOgc";
  useEffect(() => {
    const pagination = async () => {
      try {
        setLoader(true);
        const { data } = await instance.get(
          `/photos/?client_id=${API_KEY}&query=${query}`,
          {
            params: options,
          }
        );
        const img = data.results;
        setImages([...images, ...img]);

        console.log(images);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    pagination();
  }, [page]);
  useEffect(() => {
    if (query.length === 0) return;

    const fetchPhotos = async () => {
      try {
        setLoader(true);
        const { data } = await instance.get(
          `/photos/?client_id=${API_KEY}&query=${query}`,
          {
            params: {
              per_page: 12,
            },
          }
        );

        const img = data.results;
        setImages(img);

        console.log(images);
      } catch (error) {
        setErrorMessage(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchPhotos();
  }, [query]);
  const handleSearch = (q) => {
    setQuery(q);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {loader === true && <Loader />}
      {errorMessage === true && <ErrorMessage />}
      {Array.isArray(images) && <ImageGallery dataCard={images} />}
      {Array.isArray(images) && images.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </>
  );
}
