import { RiSearchEyeLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className= 'flex items-center gap-2'>
        <input type='text' placeholder='search' className= ' input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <RiSearchEyeLine />
        </button>
    </form>
  );
};

export default SearchInput;