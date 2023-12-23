"use client";
import { Auction } from "@/models/auction";
import { ResponseData } from "@/models/response";
import qs from "query-string";
import { useEffect, useState } from "react";
import { useParamsStore } from "./useParamsStore";

type SearchProps = {
  pageNumber?: number;
  pageSize?: number;
};

export const useSearch = (props: SearchProps) => {
  const { pageNumber, pageSize } = props;
  const { searchTerm, orderBy, seller, winner, filterBy } = useParamsStore(
    (state) => ({
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      seller: state.seller,
      winner: state.winner,
      filterBy: state.filterBy,
    })
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<ResponseData<Auction> | undefined>();

  console.log(searchTerm);

  useEffect(() => {
    const getData = async () => {
      const url = qs.stringifyUrl(
        {
          url: "http://localhost:6001/search",
          query: {
            searchTerm,
            pageNumber,
            pageSize,
            seller,
            winner,
            orderBy,
            filterBy,
          },
        },
        { skipNull: true, skipEmptyString: true }
      );

      try {
        setIsLoading(true);
        const response: ResponseData<Auction> = await fetch(url).then((res) =>
          res.json()
        );
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchTerm, pageNumber, pageSize, seller, winner, orderBy, filterBy]);

  return { isLoading, data, error };
};
