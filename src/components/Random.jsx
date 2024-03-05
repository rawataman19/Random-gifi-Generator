import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-[40%] min-h-[350px] bg-green-500 rounded-lg border border-black flex flex-col items-center'>
      <h1 className='text-blue uppercase text-2xl mx-2 my-2'>A Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width="350"
        height="350"
        style={{ objectFit: 'cover' }} />
      )}
      <button
        onClick={clickHandler}
        className='bg-yellow-500 uppercase w-[80%] py-2 text-2xl rounded-lg mx-2 my-2'
      >
        Generate
      </button>
    </div>
  );
};
