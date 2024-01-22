"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";

interface CoverImageModalProps {
  children: React.ReactNode;
  onUpload: () => void;
}

export const CoverImageModal = ({
  children,
  onUpload,
}: CoverImageModalProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handelImageUpload = () => {
    // Add logic for saving changes here
    onUpload();
    setDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <p>TODO: work in progress.</p>
      </DialogContent>
    </Dialog>
  );
};
