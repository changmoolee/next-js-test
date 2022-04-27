import Link from "next/link";
import { useState, useEffect } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  console.log({ results });
  return (
    <div>
      <Seo title="home" />
      {!results && <h2>Loading...</h2>}
      {results?.map((movie) => (
        <Link href={`movies/${movie.id}`} key={movie.id}>
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h2>{movie.original_title}</h2>
          </div>
        </Link>
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

export async function getServerSideProps() {
  // 오직 서버 백엔드 (서버 사이드)에서만 돌아가는 코드
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();
  return {
    props: {
      results,
    }, // 페이지에게 props로 줄 내용들
  };
}
