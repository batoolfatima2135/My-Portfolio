import { useState } from "react";
import { Field } from "./Field";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      console.log("Result:", result);

      if (result.success === true) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
    relative
    overflow-hidden
    rounded-3xl
    border border-white/15
    bg-white/6
    p-8
    backdrop-blur-xl
    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
  "
    >
      {/* subtle glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative space-y-6">
        <Field id="name" name="name" label="Name" type="text" required />

        <Field id="email" name="email" label="Email" type="email" required />

        <div>
          <label
            htmlFor="message"
            className="
            mb-2
            block
            text-sm
            font-medium
            text-gray-300
        "
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about it..."
            className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            text-white
            placeholder:text-gray-500
            outline-none
            transition
            duration-300
            focus:border-purple-400/60
            focus:ring-2
            focus:ring-purple-500/20
        "
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="
                group
                relative
                w-full
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-purple-500
                via-pink-500
                to-blue-500
                py-3.5
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-[1.02]
                disabled:opacity-50
            "
        >
          <span className="relative z-10 cursor-pointer">
            {status === "sending" ? "Sending..." : "Send Message"}
          </span>
        </button>

        <p aria-live="polite" className="text-center text-sm">
          {status === "success" && (
            <span className="text-emerald-400">
              Message sent — I'll get back to you soon.
            </span>
          )}

          {status === "error" && (
            <span className="text-red-400">
              Something went wrong. Try again.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
