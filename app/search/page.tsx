import SearchPageContent from "./SearchPageContent";

type Props = {
  searchParams: Promise<{
    prefecture?: string;
    walkingMax?: string;
    difficulty?: string;
    keyword?: string;
    sort?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const {
    prefecture,
    walkingMax,
    difficulty,
    keyword,
    sort,
  } = await searchParams;

  return (
    <SearchPageContent
      initialPrefecture={prefecture ?? ""}
      initialWalkingMax={walkingMax ?? ""}
      initialDifficulty={difficulty ?? ""}
      initialKeyword={keyword ?? ""}
      initialSort={sort ?? ""}
    />
  );
}