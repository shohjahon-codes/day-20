"use client";
import React from "react";
import { deleteTodo } from "@/service/mutation/todo-mutation";
import { toast } from "react-toastify";
import { Modal } from "./modal";
import { UserForm } from "./user-form";

export const Card = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  const [isloading, setLoading] = React.useTransition();
  const [isopen, setIsopen] = React.useState(false);

  const deleteData = () => {
    setLoading(async () => {
      try {
        const res = await deleteTodo(id);
        console.log(res, "awdawd");
      } catch (error) {
        const err = error as Error;
        toast.error(err.message, {
          position: "top-right",
        });
      }
    });
  };

  return (
    <div className="flex justify-between items-center p-[20px] m-[20px] border ">
      <div>
        <h1 className="text-4xl text-blue-400">{title}</h1>
        <p>{description}</p>
      </div>
      <div>
      <button
          disabled={isloading}
          onClick={() => setIsopen(true)}
          className="p-[10px] rounded-[8px] text-white bg-blue-400"
        >
          {isloading ? "Loading..." : "Edit"}
        </button>
        <button
          disabled={isloading}
          onClick={deleteData}
          className="p-[10px] text-white bg-red-400 rounded-[10px] m-[5px]"
        >
          {isloading ? "Loading..." : "delete"}
        </button>
        
        <Modal close={() => setIsopen(false)} isOpen={isopen}>
          <UserForm
            description={description}
            title={title}
            id={id}
            setIsopen={setIsopen}
          />
        </Modal>
      </div>
    </div>
  );
};
