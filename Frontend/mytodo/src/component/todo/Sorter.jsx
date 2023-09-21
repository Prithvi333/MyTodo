import { useState } from "react";
import idSorter from "./idSorter";
import prioritySorter from "./prioritySorter";

export default function Sorter({ sorter, setSorter, data, setData }) {
  sorter && sorter === "id"
    ? idSorter(setSorter, data, setData)
    : sorter === "priority" && prioritySorter(setSorter, data, setData);

  return (
    <select
      className="inpborder sortposition "
      onChange={(e) => setSorter(e.target.value)}
      name=""
      id=""
    >
      <option value="">Sort</option>
      <option value="id">Id</option>
      <option value="priority">Priority</option>
    </select>
  );
}
