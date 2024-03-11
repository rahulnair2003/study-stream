"use client";
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { Plus } from "lucide-react";

interface Props {}

const CreateNoteDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 rounded flex border-red-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover: -translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-red-600" strokeWidth={3} />
          <h2 className="font-semibold text-red-600 sm:mt-2">
            &nbsp; New Notebook
          </h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="h-1"></div>
        <DialogTitle>New Notebook</DialogTitle>
        <DialogHeader>📝 Click this button to make a new notebook</DialogHeader>
        <div className="h-1"></div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
