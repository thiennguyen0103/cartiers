import { useParamsStore } from "@/hooks/useParamsStore";
import { Button } from "flowbite-react";
import { ArrowDownAZ, CircleDot, Clock } from "lucide-react";

const orderOptions = [
  {
    icon: <ArrowDownAZ />,
    value: "make",
  },
  {
    icon: <Clock />,
    value: "endingSoon",
  },
  {
    icon: <CircleDot />,
    value: "new",
  },
];

function Filter() {
  const orderBy = useParamsStore((state) => state.orderBy);
  const setParams = useParamsStore((state) => state.setParams);

  const onChangeOrderBy = (order: string) => {
    setParams({ orderBy: order });
  };
  return (
    <div className="flex items-center">
      <div>
        <Button.Group>
          {orderOptions.map((item, index) => (
            <Button
              key={index}
              color="light"
              className={`${
                orderBy === item.value ? "text-red-600" : "text-gray-600"
              }`}
              onClick={() => onChangeOrderBy(item.value)}
            >
              {item.icon}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
}

export default Filter;
