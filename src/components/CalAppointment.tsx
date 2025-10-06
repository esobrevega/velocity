"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalFloatingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meet" });

      // Floating button setup
      cal("floatingButton", {
        calLink: "ea-digitals-kcgx9o/meet",
        config: { layout: "month_view" },
        buttonText: "Request an Appointment",
        hideButtonIcon: false,
        buttonPosition: "bottom-right",
        buttonColor: "#867343",
      });

      // UI configuration (styling, theme, layout)
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

  return null; // No visible element; it injects the floating button
}
