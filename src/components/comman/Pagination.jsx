import React from "react";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize }) => {
  // console.log(itemsCount, pageSize);
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount == 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li key={page} className="page-item">
                <a className="page-link">{page}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
