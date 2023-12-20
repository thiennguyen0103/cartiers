"use client";
import { useToast } from "@/components/ui/use-toast";
import { Auction } from "@/models/auction";
import { ResponseData } from "@/models/response";
import { useEffect, useState } from "react";

type SearchProps = {
  params?: string;
};

export const useSearch = (props: SearchProps) => {
  const { params } = props;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<ResponseData<Auction> | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response: ResponseData<Auction> = await fetch(
          "http://localhost:6001/search",
        ).then((res) => res.json());
        setData(response);
      } catch (error) {
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [toast]);

  return { isLoading, data, error };
};
