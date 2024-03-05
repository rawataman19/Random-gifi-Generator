import React, { useState } from 'react'
import Spinner   from './Spinner';
import useGif from '../hooks/useGif';
// ... (your existing imports)

export const Tag = () => {
  const [tag, setTag] = useState('');

  function changeHandler(e) {
    setTag(e.target.value);
  }

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <div
      className='w-[40%] min-h-[350px] bg-blue-500 rounded-lg border border-black flex flex-col items-center overflow-hidden'
    >
      <h1 className='text-white uppercase text-2xl mx-2 my-2'>Random {tag} Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width="350" height="350" />
      )}
      <input
        className='w-10/12 text-lg mx-2 my-2'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={clickHandler} className='bg-yellow-500 uppercase w-[80%] py-2 text-2xl rounded-lg mx-2 my-2'>
        Generate
      </button>
    </div>
  );
};

export default Tag;
