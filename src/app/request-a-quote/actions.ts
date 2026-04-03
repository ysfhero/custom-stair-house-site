"use server";

import { redirect } from "next/navigation";

export type QuoteFormState = {
  error?: string;
  values?: Record<string, string>;
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const buyerType = getString(formData, "buyerType");
  const productNeeded = getString(formData, "productNeeded");
  const location = getString(formData, "location");
  const projectDetails = getString(formData, "projectDetails");
  const hasMaterial = getString(formData, "hasMaterial");

  const values = {
    name,
    email,
    phone,
    buyerType,
    productNeeded,
    location,
    projectDetails,
    hasMaterial,
  };

  if (!name || !email || !productNeeded || !projectDetails) {
    return {
      error: "Please fill in name, email, product needed, and project details.",
      values,
    };
  }

  console.log("Custom Stair House quote request", {
    submittedAt: new Date().toISOString(),
    name,
    email,
    phone,
    buyerType,
    productNeeded,
    location,
    projectDetails,
    hasMaterial,
  });

  redirect("/thank-you");
}
