import { useState, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "378ccea3841975555a64278aef5f911a";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();
      setMovies(results);
    })(); // async 부분이 익명 함수(재사용 불가)로 작성되었고, 익명 함수는 즉시 실행해야 하기 때문에 ()를 이용해 익명 함수를 바로 호출하는 것
  }, []);

  console.log(movies);
  return (
    <div>
      <Seo title="home" />
      {!movies && <h2>Loading...</h2>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
      <style jsx>{`
        a {
          color: red;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </div>
  );
}
