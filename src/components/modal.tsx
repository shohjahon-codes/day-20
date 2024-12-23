"use client";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ children, isOpen, close }: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="bg-[#00000070] fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-[400px]    p-[20px]">
        <div className="flex justify-between items-center">
          <p>Edit User </p>
          <button
            className="p-[10px] w-[40px]  rounded-[50%] bg bg-red-600 text-white"
            onClick={close}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
