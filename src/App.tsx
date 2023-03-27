import React from "react";

function App() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex w-1/2'>
        <div className='w-6/12 '></div>
        <div className='w-6/12 bg-pink'></div>
      </div>
      <div className='w-1/2 bg-pink'></div>
      {/* <div className='flex w-11/12'>
        <div className='w-5/12 z-10'></div>
        <div className='w-7/12 bg-transparent z-10'></div>
      </div> */}
    </div>
  );
}

export default App;
