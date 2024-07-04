import { Settings } from 'lucide-react'
import { Label } from '@/components/ui/label'
import ThemeToggle from '@/components/theme-toggle'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function SettingButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/5"
        >
          <Settings className="mr-2 h-[18px] w-[18px] shrink-0" />
          <span className="truncate">Settings</span>
        </div>
      </DialogTrigger>
      <DialogContent className="dark:bg-[#1F1F1F] dark:text-slate-300">
        <DialogHeader className="pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem]">
              Customize how Noted looks on your device
            </span>
          </div>
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}
