import React from "react";

const PlayerSkeleton = () => {
  return (
    <div class="mx-auto rounded-md shadow">
      <div class="flex space-x-4 animate-pulse">
        <div class="flex-1 py-1 space-y-4">
          <div class="w-full h-96 bg-gray-800 rounded"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-800 rounded"></div>
            <div class="w-5/6 h-4 bg-gray-800 rounded"></div>
          </div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-800 rounded"></div>
            <div class="w-5/6 h-4 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSkeleton;
