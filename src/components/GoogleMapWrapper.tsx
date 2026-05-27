import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { ClinicInfo } from "../types";

interface GoogleMapWrapperProps {
  clinic: ClinicInfo;
  onCopyAddress: () => void;
  copied: boolean;
}

export default function GoogleMapWrapper({
  clinic,
  onCopyAddress,
  copied,
}: GoogleMapWrapperProps) {
  // Free, fully interactive keyless Google Maps iframe URL
  const mapSearchText = `${clinic.address}, ${clinic.complement}, ${clinic.city} - ${clinic.state}`;
  const iframeUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapSearchText)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      id="google-map-iframe-container"
      className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50 flex flex-col group"
    >
      {/* Interactive Embed Iframe */}
      <iframe
        title="Google Map - Consultório Flávia Oliva"
        src={iframeUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full flex-grow relative z-10"
      />

      {/* Floating Mini Address Identity Banner for ease-of-use */}
      <div className="relative z-20 w-full bg-slate-900 text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-opacity-95 backdrop-blur-xs border-t border-slate-800">
        <div className="text-left font-sans">
          <p className="text-[10px] text-brand-lilac font-semibold tracking-wider font-mono">
            MAPA INTERATIVO PRESENCIAL
          </p>
          <p className="text-sm font-semibold">{clinic.address}</p>
          <p className="text-xs text-slate-300">
            {clinic.complement} &bull; {clinic.cep} &bull; Sorocaba, SP
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto self-stretch sm:self-center justify-end">
          <span className="inline-flex items-center gap-1.5 text-xs bg-slate-800 text-slate-300 py-1.5 px-3 rounded-full border border-slate-700 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Mapa Ativo
          </span>
        </div>
      </div>
    </div>
  );
}
