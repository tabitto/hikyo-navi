"use client";

type Props = {
  entranceName: string;
};

export default function RouteToEntranceButton({
  entranceName,
}: Props) {
  const handleRoute = () => {
    if (!navigator.geolocation) {
      alert("この端末では現在地を取得できません。");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin =
          `${position.coords.latitude},${position.coords.longitude}`;

        const url = new URL(
          "https://www.google.com/maps/dir/"
        );

        url.searchParams.set("api", "1");
        url.searchParams.set("origin", origin);
        url.searchParams.set("destination", entranceName);
        url.searchParams.set("travelmode", "transit");

        window.open(url.toString(), "_blank");
      },
      () => {
        alert(
          "現在地を取得できませんでした。位置情報の利用を許可してください。"
        );
      }
    );
  };

  return (
    <button
      onClick={handleRoute}
      className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 sm:w-auto"
    >
      📍 現在地から「{entranceName}」まで調べる
    </button>
  );
}