import { Produto } from '../types';
import { ExternalLink, Info, Camera } from 'lucide-react';

interface ProductCardProps {
  produto: Produto;
  onViewDetails: (nome: string, detalhes: string) => void;
  onEditImage?: () => void;
  key?: string | number;
}

export default function ProductCard({ produto, onViewDetails, onEditImage }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full flex flex-col relative">
      <div 
        className="aspect-square overflow-hidden relative cursor-pointer"
        onClick={() => onViewDetails(produto.nome, produto.detalhes || '')}
      >
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4 md:p-6"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/400x400/f8fafc/1e293b?text=${encodeURIComponent(produto.nome)}`;
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gray-600 rounded-full border border-gray-100">
            {produto.categoria}
          </span>
        </div>
        
        {onEditImage && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onEditImage();
            }}
            className="absolute top-4 right-4 bg-primary text-white p-3 rounded-full shadow-xl transition-all z-30 hover:scale-110 active:scale-95 flex items-center justify-center"
            title="Trocar imagem deste produto"
          >
            <Camera size={18} />
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-sans font-semibold text-navy text-lg mb-1">{produto.nome}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{produto.descricao}</p>
        
        <button 
          onClick={() => onViewDetails(produto.nome, produto.detalhes || '')}
          className="mb-4 flex items-center gap-2 text-navy hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider"
        >
          <Info size={14} />
          Informações do Suplemento
        </button>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Qualidade</span>
            <span className="text-[11px] font-bold text-navy uppercase tracking-tight">Nutrye Premium</span>
          </div>
          <a 
            href={produto.linkMercadoLivre} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-xl hover:bg-primary font-bold text-xs transition-all shadow-md shadow-navy/10"
          >
            Ver no ML
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
