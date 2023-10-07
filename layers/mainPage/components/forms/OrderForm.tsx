import React from "react";
import { ModalDialog } from "../../types";

const OrderForm = ({ closeModal }: Pick<ModalDialog, "closeModal">) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        closeModal();
      }}
      className="w-full flex max-w-4xl border ring-4 ring-blue-500 transform
                 overflow-hidden rounded-2xl bg-white p-6 text-left text-lg font-medium
                  align-middle shadow-xl transition-all"
    >
      <div className="w-1/2 flex flex-col px-12 py-10">
        <h2 className="text-6xl font-medium">Request to car</h2>
        <div className="flex flex-col gap-1 mt-10">
          <label htmlFor="name" className="text-lg text-gray-500">
            Full name *
          </label>
          <input
            type="text"
            name="name"
            className="focus:outline-none border-b pb-2 border-gray-900"
          />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <label htmlFor="name" className="text-lg text-gray-500">
            Phone number*
          </label>
          <input
            required
            type="text"
            name="name"
            className="focus:outline-none border-b border-gray-900"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col px-12 py-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="audi" className="text-lg text-gray-500">
            Dealer
          </label>
          <select
            name="audi"
            className="border-b border-gray-900 pb-2 focus:outline-none"
          >
            <option>-Choose Dealer-</option>
            <option>Audi Almaty</option>
            <option>Audi Astana</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mt-6">
          <label htmlFor="audi" className="text-lg text-gray-500">
            Message
          </label>
          <textarea
            className=" h-40 border-b border-gray-900 pb-2 focus:outline-none"
            name="message"
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <div className="flex items-center gap-6 mt-10">
          <input
            type="checkbox"
            className="w-8 h-8
            checked:bg-checkbox
             bg-center bg-[length:120%] bg-no-repeat
             border rounded-lg flex-shrink-0  border-gray-500  appearance-none"
            name="confirm"
            required
          />
          <label htmlFor="confirm">
            I consent to the collection and processing of information
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-6 py-4 text-white rounded-full mt-10"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
