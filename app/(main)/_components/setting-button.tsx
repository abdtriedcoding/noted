import { SettingsIcon } from "lucide-react";

const SettingButton = () => {
  return (
    <div
      role="button"
      className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
    >
      <SettingsIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">Settings</span>
    </div>
  );
};

export default SettingButton;
