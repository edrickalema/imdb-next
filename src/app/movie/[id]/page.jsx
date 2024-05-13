import FlexBox from "@/app/components/FlexBox";
import { getSingleMovie } from "@/app/utils/action";
import Image from "next/image";
import React from "react";

const SingleMoviePage = async ({ params }) => {
  const id = params.id;

  const movie = await getSingleMovie(id);

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex gap-5 justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.Title}
          width={300}
          height={200}
        />
        <div>
          {" "}
          <FlexBox title="Title:" text={movie.title} />
          <FlexBox title="Description:" text={movie.overview} />
          <FlexBox title="Release Date:" text={movie.release_date} />
          <FlexBox title="Likes:" text={movie.vote_count} />
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
