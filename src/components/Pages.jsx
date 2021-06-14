import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/devicesReducer";

const Pages = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.devices.totalCount);
  const limit = useSelector((state) => state.devices.limit);
  const currentPage = useSelector((state) => state.devices.page);
  console.log(currentPage);
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          onClick={() => dispatch(setPage(page))}
          active={currentPage === page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
