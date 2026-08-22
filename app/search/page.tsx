import SearchPageContent from "./SearchPageContent";

type Props = {
  searchParams: Promise<{
    prefecture?: string;
    difficulty?: string;
    keyword?: string;
    sort?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const {
    prefecture,
    difficulty,
    keyword,
    sort,
  } = await searchParams;

  return (
    <SearchPageContent
      initialPrefecture={prefecture ?? ""}
      initialDifficulty={difficulty ?? ""}
      initialKeyword={keyword ?? ""}
      initialSort={sort ?? ""}
    />
  );
}