// 1. ADICIONE ESTA FUNÇÃO AQUI
export const handleConversion = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: 10.00, // Coloque o valor da sua consulta aqui
      currency: 'BRL'
    });
  }
};