import { Car } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between px-6 py-4 shadow-md">
      <div>
        <Car size={34} />
      </div>
      <div>
        <Input className="min-w-[300px]" placeholder="Search..." />
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default Header;
