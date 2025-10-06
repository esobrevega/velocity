"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalButton() {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#867343" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="meet"
      data-cal-link="ea-digitals-kcgx9o/meet"
      data-cal-config='{"layout":"month_view"}'
      className="bg-[#867343] text-white px-5 py-3 rounded-lg shadow-md hover:bg-[#9a8450] transition-all"
    >
      Book Appointment
    </button>
  );
}
