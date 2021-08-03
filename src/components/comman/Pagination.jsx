import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  // console.log(itemsCount, pageSize);
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  // console.log(currentPage);
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
