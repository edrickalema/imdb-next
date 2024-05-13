import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const MovieCard = ({
  title,
  id,
  poster_path,
  release_date,
  vote_average,
  vote_count,

  backdrop_path,
  name,
  overview,
}) => {
  return (
    <div className=" group flex gap-2 sm:border-4 rounded-md border-slate-200">
      <div>
        <Link href={`/movie/${id}`} className="relative h-[300px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              poster_path || backdrop_path
            }`}
            width={500}
            height={300}
            sizes="(min-width: 808px) 100vw, 100vw"
            alt="image"
            className=" group-hover:opacity-75 sm:rounded-t-md translate-opacity duration-300 ease-in-out"
          ></Image>
        </Link>
        <div className="p-2">
          <h3 className="text-2xl font-bold pt-4">{title || name}</h3>
          <p className="line-clamp-2 py-1">{overview}</p>

          <div className="flex justify-between">
            <h3>{release_date}</h3>
            <div className="flex gap-2">
              <FaThumbsUp /> <p>{vote_count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
