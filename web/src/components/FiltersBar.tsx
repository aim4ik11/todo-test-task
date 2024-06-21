import { ChangeEvent } from "react";
import { MdSort } from "react-icons/md";

interface SearchBarProps {
  search: string;
  setSearch: (arg: string) => void;
  setFilter: (arg: number) => void;
  handleSort: () => void;
}

const FiltersBar = ({ search, setSearch, setFilter, handleSort }: SearchBarProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => setFilter(parseInt(e.target.value));

  return (
    <div className="mb-4 flex h-12">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={handleSearch}
          className="border p-2 mr-2"
        />
        <select onChange={handleFilter} className="border p-2">
          <option value={2}>All</option>
          <option value={0}>In Progress</option>
          <option value={1}>Done</option>
        </select>
        <button onClick={handleSort} className="h-full border p-2 ml-2">
          <MdSort className="w-full h-full" />
        </button>
      </div>
  );
};

export default FiltersBar;
