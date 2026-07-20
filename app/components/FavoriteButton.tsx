"use client";

import { useEffect, useState } from "react";

type Props = {
  spotId: number;
};

export default function FavoriteButton({ spotId }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteSpots");
    const favoriteIds: number[] = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    setIsFavorite(favoriteIds.includes(spotId));
  }, [spotId]);

  const handleFavorite = () => {
    const savedFavorites = localStorage.getItem("favoriteSpots");
    const favoriteIds: number[] = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    let newFavoriteIds: number[];

    if (favoriteIds.includes(spotId)) {
      newFavoriteIds = favoriteIds.filter((id) => id !== spotId);
    } else {
      newFavoriteIds = [...favoriteIds, spotId];
    }

    localStorage.setItem(
      "favoriteSpots",
      JSON.stringify(newFavoriteIds)
    );

    setIsFavorite(newFavoriteIds.includes(spotId));
  };

  return (
    <button
      onClick={handleFavorite}
      className={`mt-6 w-full rounded-lg px-6 py-3 font-bold ${
        isFavorite
          ? "bg-red-100 text-red-700"
          : "bg-green-700 text-white hover:bg-green-800"
      }`}
    >
      {isFavorite ? "♥ 行ってみたいに登録済み" : "♡ 行ってみたい"}
    </button>
  );
}