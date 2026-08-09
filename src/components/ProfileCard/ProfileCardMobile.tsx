import React, { useMemo } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = "",
  name = "",
}) => {
  const cardStyle = useMemo(
    () =>
      ({
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": grainUrl ? `url(${grainUrl})` : "none",
        "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
        "--behind-glow-color": behindGlowColor ?? "rgba(125, 190, 255, 0.67)",
        "--behind-glow-size": behindGlowSize ?? "50%",
      }) as React.CSSProperties,
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize],
  );

  return (
    <div className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      {behindGlowEnabled && <div className="pc-behind" />}
      <div>
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-avatar-content">
              <img
                className="avatar"
                src={avatarUrl}
                alt={`${name || "User"} avatar`}
                loading="lazy"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCardMobile = React.memo(ProfileCardComponent);
export default ProfileCardMobile;
