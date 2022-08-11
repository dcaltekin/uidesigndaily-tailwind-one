import React from "react";

function Post() {
  return (
    <div>
      <div className="bg-[#e4cde2]  w-11/12 md:w-4/12 p-4 md:p-12  mx-auto border-[10px] border-white rounded-3xl my-8">
        <h3 className="text-2xl">Recent posts</h3>
        <ul className="flex flex-col gap-y-4 mt-4 font-semibold">
          <li className="hover:bg-white rounded-2xl p-3 transition-all cursor-pointer">
            Azure Speech Studio For Mixed Reality
          </li>
          <li className="hover:bg-white rounded-2xl p-3 transition-all cursor-pointer">
            HoloLens 2 Unreal Project Template
          </li>
          <li className="hover:bg-white rounded-2xl p-3 transition-all cursor-pointer">
            Simplygon in Azure
          </li>
          <li className="hover:bg-white rounded-2xl p-3 transition-all cursor-pointer">
            Blender in Azure
          </li>
          <li className="hover:bg-white rounded-2xl p-3 transition-all cursor-pointer">
            AAD Login on HoloLens 2
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Post;
