import { MessageCircleMore } from 'lucide-react'

export default function FloatingWhatsApp() {
	const phoneNumber = '5515988096168'

	const message = encodeURIComponent(
		'Olá! Quero agendar uma consulta.'
	)

	return (
		<a
			href={`https://wa.me/${phoneNumber}?text=${message}`}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(37,211,102,0.35)]"
		>
			<div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
				<MessageCircleMore className="h-6 w-6 text-[#25D366]" />
			</div>

			<div className="flex flex-col leading-tight">
				<span className="text-sm font-semibold text-white">
					Agendar consulta
				</span>

				<span className="text-xs text-white/80">
					Atendimento via WhatsApp
				</span>
			</div>
		</a>
	)
}