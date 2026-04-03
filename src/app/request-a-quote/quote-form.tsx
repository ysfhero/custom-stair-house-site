"use client";

import { useActionState } from "react";
import { submitQuoteRequest, type QuoteFormState } from "./actions";

const initialState: QuoteFormState = {};

function inputClassName() {
  return "mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-500";
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuoteRequest, initialState);
  const values = state.values ?? {};

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-stone-700">
          Name *
          <input name="name" type="text" defaultValue={values.name ?? ""} className={inputClassName()} />
        </label>
        <label className="text-sm font-medium text-stone-700">
          Email *
          <input name="email" type="email" defaultValue={values.email ?? ""} className={inputClassName()} />
        </label>
        <label className="text-sm font-medium text-stone-700">
          Phone
          <input name="phone" type="text" defaultValue={values.phone ?? ""} className={inputClassName()} />
        </label>
        <label className="text-sm font-medium text-stone-700">
          Buyer Type
          <select name="buyerType" defaultValue={values.buyerType ?? ""} className={inputClassName()}>
            <option value="">Select one</option>
            <option value="Flooring Store">Flooring Store</option>
            <option value="Installer">Installer</option>
            <option value="Contractor / Builder">Contractor / Builder</option>
            <option value="Homeowner">Homeowner</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="text-sm font-medium text-stone-700">
          Product Needed *
          <select name="productNeeded" defaultValue={values.productNeeded ?? ""} className={inputClassName()}>
            <option value="">Select one</option>
            <option value="Stair Treads">Stair Treads</option>
            <option value="Stair Nosings">Stair Nosings</option>
            <option value="Vent Covers">Vent Covers</option>
            <option value="Other Matching Accessory">Other Matching Accessory</option>
          </select>
        </label>
        <label className="text-sm font-medium text-stone-700">
          Project Location
          <input name="location" type="text" defaultValue={values.location ?? ""} className={inputClassName()} />
        </label>
        <label className="text-sm font-medium text-stone-700 sm:col-span-2">
          Flooring Material Available?
          <select name="hasMaterial" defaultValue={values.hasMaterial ?? ""} className={inputClassName()}>
            <option value="">Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-stone-700">
        Project Details *
        <textarea
          name="projectDetails"
          rows={6}
          defaultValue={values.projectDetails ?? ""}
          className={`${inputClassName()} resize-y`}
          placeholder="Tell us what you need, what stage the project is at, and any measurements or notes you already have."
        />
      </label>

      {state.error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      ) : null}

      <button type="submit" disabled={pending} className="cta-primary border-0 disabled:cursor-not-allowed disabled:opacity-60">
        {pending ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
