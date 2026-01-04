"use client";

import { useMemo, useState } from "react";

type OrgType = "Market Infrastructure" | "Systemic Bank" | "Other regulated institution";
type Role =
  | "Risk"
  | "Compliance"
  | "Operations"
  | "Technology"
  | "Security"
  | "Governance"
  | "Other";

function encodeMailto(value: string) {
  return encodeURIComponent(value.replace(/\r?\n/g, "\n"));
}

export function EngageForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState<Role>("Risk");
  const [orgType, setOrgType] = useState<OrgType>("Market Infrastructure");
  const [message, setMessage] = useState("");
  const [region, setRegion] = useState("");

  const mailtoHref = useMemo(() => {
    const to = "hello@asplenz.com";
    const subject = `Horizon - acceptability discussion (${orgType})`;

    const bodyLines = [
      "Engage: an acceptability discussion (not a sales process)",
      "",
      `Name: ${name || "-"}`,
      `Role / Function: ${role || "-"}`,
      `Organization type: ${orgType || "-"}`,
      `Region / jurisdiction (optional): ${region || "-"}`,
      "",
      "What you want to assess (short text):",
      message || "-"
    ];

    const body = bodyLines.join("\n");
    return `mailto:${to}?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`;
  }, [name, role, orgType, message, region]);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
            placeholder="Name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-700">Role / Function</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option>Risk</option>
            <option>Compliance</option>
            <option>Operations</option>
            <option>Technology</option>
            <option>Security</option>
            <option>Governance</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-700">Organization type</label>
          <select
            value={orgType}
            onChange={(e) => setOrgType(e.target.value as OrgType)}
            className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option>Market Infrastructure</option>
            <option>Systemic Bank</option>
            <option>Other regulated institution</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-700">Region / jurisdiction (optional)</label>
          <input
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
            placeholder="Region / jurisdiction"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-slate-700">What you want to assess (short text)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
          placeholder="What you want to assess"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Submit (mailto)
        </button>

        <a href={mailtoHref} className="text-sm text-slate-700">
          Or open in your mail client
        </a>
      </div>

      <p className="text-sm text-slate-600">
        Submit opens your mail client to send to <span className="text-slate-900">hello@asplenz.com</span>.
      </p>
    </form>
  );
}
