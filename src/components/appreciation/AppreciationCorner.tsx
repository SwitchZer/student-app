import React from 'react';
import AppreciationForm from './AppreciationForm';
import AppreciationList from './AppreciationList';

const AppreciationCorner = () => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="text-2xl font-medium leading-none text-stone-950">
          Appreciation corner
        </div>
        <div className="flex flex-col justify-center p-6 mt-4 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
          <AppreciationForm />
          <AppreciationList />
        </div>
      </div>
    </div>
  );
};

export default AppreciationCorner; 