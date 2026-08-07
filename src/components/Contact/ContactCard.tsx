interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  href,
}) => {
  const content = (
    <div
      className="
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.06]
        hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.5)]
      "
    >
      {/* subtle glow that follows on hover */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-white/[0.06]
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          text-white
          transition-colors
          duration-300
          group-hover:border-white/20
          group-hover:bg-white/10
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {title}
        </p>
        <p className="mt-0.5 truncate text-[15px] font-medium text-white">
          {value}
        </p>
      </div>

      {href && (
        <svg
          className="
            h-4
            w-4
            shrink-0
            text-gray-500
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:text-white
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H9M17 7V15"
          />
        </svg>
      )}
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-2xl"
    >
      {content}
    </a>
  ) : (
    content
  );
};
