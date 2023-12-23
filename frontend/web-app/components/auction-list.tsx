"use client";

import { DEFAULT_PAGINATION } from "@/constants/constants";
import { useSearch } from "@/hooks/useSearch";
import { Dropdown, DropdownItem, Pagination } from "flowbite-react";
import { Fragment, useState } from "react";
import AuctionCard from "./auction-card";
import Filter from "./filter";

const pageSizeOptions = [10, 20, 50];

function AuctionList() {
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION);
  const { data } = useSearch({
    pageNumber: pagination.pageNumber,
    pageSize: pagination.pageSize,
  });

  const onChangePagination = (page: number) => {
    setPagination({
      ...pagination,
      pageNumber: page,
    });
  };

  const onChangePageSize = (pageSize: number) => {
    setPagination({
      ...pagination,
      pageSize,
    });
  };
  return (
    <Fragment>
      <div className="mb-2">
        <Filter />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.results?.map((auction) => (
          <AuctionCard auctionData={auction} key={auction.id} />
        ))}
      </div>
      {data?.results.length ? (
        <div className="flex items-center justify-center gap-2">
          <Pagination
            currentPage={pagination.pageNumber}
            totalPages={data?.pageCount || 0}
            onPageChange={onChangePagination}
            showIcons
          />
          <Dropdown label={`${pagination.pageSize} / page`} size="sm" inline>
            {pageSizeOptions.map((pageSize) => (
              <DropdownItem
                key={pageSize}
                onClick={() => onChangePageSize(pageSize)}
              >
                {`${pageSize} / page`}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      ) : null}
    </Fragment>
  );
}

export default AuctionList;
