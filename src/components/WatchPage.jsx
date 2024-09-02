import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className="p-2">
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=4EID9QK9QUSLQjTQ`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
