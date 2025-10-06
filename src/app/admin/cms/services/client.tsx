"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

type ServiceForm = {
  icon: string;
  title: string;
  shortDesc: string;
  category: string;
  image?: string | File;
  details: {
    description: string;
    features: { value: string }[];
    benefits: { value: string }[];
    popular: boolean;
  };
};

export default function ServicesCMSClient() {
  const [editingService, setEditingService] = useState<ServiceForm | null>(null);

  const form = useForm<ServiceForm>({
    defaultValues: {
      icon: "",
      title: "",
      shortDesc: "",
      category: "",
      image: undefined,
      details: {
        description: "",
        features: [{ value: "" }],
        benefits: [{ value: "" }],
        popular: false,
      },
    },
  });

  // Features field array
  const {
    fields: featureFields,
    append: addFeature,
    remove: removeFeature,
  } = useFieldArray({
    control: form.control,
    name: "details.features",
  });

  // Benefits field array
  const {
    fields: benefitFields,
    append: addBenefit,
    remove: removeBenefit,
  } = useFieldArray({
    control: form.control,
    name: "details.benefits",
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted:", values);
    setEditingService(null);
    form.reset();
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Services CMS (Frontend Only)</h1>

      {/* FORM */}
      <form
        onSubmit={onSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <input {...form.register("icon")} placeholder="Icon" />
        <input {...form.register("title")} placeholder="Title" />
        <input {...form.register("shortDesc")} placeholder="Short Description" />
        <input {...form.register("category")} placeholder="Category" />
        <textarea
          {...form.register("details.description")}
          placeholder="Description"
        />

        {/* FEATURES */}
        <div>
          <h3 className="font-semibold">Features</h3>
          {featureFields.map((field, i) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...form.register(`details.features.${i}.value`)}
                placeholder={`Feature ${i + 1}`}
              />
              <button type="button" onClick={() => removeFeature(i)}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addFeature({ value: "" })}>
            + Add Feature
          </button>
        </div>

        {/* BENEFITS */}
        <div>
          <h3 className="font-semibold">Benefits</h3>
          {benefitFields.map((field, i) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...form.register(`details.benefits.${i}.value`)}
                placeholder={`Benefit ${i + 1}`}
              />
              <button type="button" onClick={() => removeBenefit(i)}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addBenefit({ value: "" })}>
            + Add Benefit
          </button>
        </div>

        {/* POPULAR CHECKBOX */}
        <label>
          <input type="checkbox" {...form.register("details.popular")} /> Popular
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {editingService ? "Update Service" : "Create Service"}
        </button>
      </form>

      {/* TEMP DISPLAY */}
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(form.watch(), null, 2)}
      </pre>
    </div>
  );
}
