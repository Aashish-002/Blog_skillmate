// components/SinglePageClient.tsx
"use client";

import React, { useState } from 'react';
import ShareOpportunity from '@/components/ShareOpportunity/ShareOpportunity';

const SinglePageClient = ({ data }: { data: any }) => {
  const [showShare, setShowShare] = useState(false);

  const openShare = () => {
      setShowShare(true);
  };

  const closeShare = () => {
      setShowShare(false);
  };

  const pageUrl = `https://blog.skillmate.ai/posts/${data.slug}`;

  return (
    <>
      <div className="relative flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <h1 className="mx-3 text-3xl md:text-4xl py-4 font-extrabold">
            {data.title}
          </h1>
          <button 
            className="mt-2 sm:mt-0 px-4 py-2 bg-brandgreen text-white rounded-full"
            onClick={openShare}
          >
            Share
          </button>
        </div>
        
        {showShare && <ShareOpportunity onClose={closeShare} pageUrl={pageUrl} />}
      </div>
    </>
  );
};

export default SinglePageClient;
