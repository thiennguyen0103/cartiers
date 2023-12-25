import { useParamsStore } from "@/hooks/useParamsStore";
import { Button } from "flowbite-react";
import {
  ArrowDownAZ,
  BookmarkCheck,
  CalendarClock,
  CircleDot,
  Clock,
  Flame,
} from "lucide-react";

const orderOptions = [
  {
    label: "Alphabetical",
    icon: <ArrowDownAZ />,
    value: "make",
  },
  {
    label: "End date",
    icon: <Clock />,
    value: "endingSoon",
  },
  {
    label: "Recently added",
    icon: <CircleDot />,
    value: "new",
  },
];

const filterOptions = [
  {
    label: "Live Auctions",
    icon: <Flame />,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: <CalendarClock />,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: <BookmarkCheck />,
    value: "finished",
  },
];

function Filter() {
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);
  const setParams = useParamsStore((state) => state.setParams);

  const onChangeOrderBy = (order: string) => {
    setParams({ orderBy: order });
  };

  const onChangeFilterBy = (filter: string) => {
    setParams({ filterBy: filter });
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <Button.Group>
        {orderOptions.map((item, index) => (
          <Button
            key={index}
            color="light"
            className={`flex items-center gap-2 ${
              orderBy === item.value ? "text-red-600" : "text-gray-600"
            }`}
            onClick={() => onChangeOrderBy(item.value)}
          >
            <div>{item.icon}</div>
            <div>{item.label}</div>
          </Button>
        ))}
      </Button.Group>
      <Button.Group>
        {filterOptions.map((item, index) => (
          <Button
            key={index}
            color="light"
            className={`flex items-center gap-2 ${
              filterBy === item.value ? "text-red-600" : "text-gray-600"
            }`}
            onClick={() => onChangeFilterBy(item.value)}
          >
            <div>{item.icon}</div>
            <div>{item.label}</div>
          </Button>
        ))}
      </Button.Group>
    </div>
  );
}

export default Filter;
