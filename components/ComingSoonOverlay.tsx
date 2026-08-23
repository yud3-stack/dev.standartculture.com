import Image from "next/image";

export function ComingSoonOverlay() {
  return (
    <div className="coming-soon-overlay" aria-label="Coming soon">
      <p className="coming-soon-status"><Image src="/Logo.svg" alt="StandArt Culture" width={258} height={42} priority className="coming-soon-logo" /></p>
      <div className="w-full h-31 bg-[#E73C29] flex flex-row justify-center items-center">
        <p className="coming-soon-label">COMING SOON</p>
      </div>
      <p className="coming-soon-progress">SITE IN PROGRESS</p>
    </div>
  );
}
