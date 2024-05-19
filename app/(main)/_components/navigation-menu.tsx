import { Sidebar } from "./sidebar";
import { PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const NavigationMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="inline-flex md:hidden" size="icon" variant="ghost">
          <PanelLeftOpen className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
