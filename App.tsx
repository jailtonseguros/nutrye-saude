import { PRODUTOS, SITE_IMAGES } from './constants';
import ProductCard from './components/ProductCard';
import { ShieldCheck, Award, FlaskConical, ShoppingBag, ExternalLink, MessageCircle, Instagram, Youtube, CheckCircle, X, Menu, Zap, Sparkles, Heart, History, ClipboardList, Check, Camera, Upload, Calculator, Info, Flame, Settings, Save } from 'lucide-react';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [viewingDetails, setViewingDetails] = useState<{ nome: string; detalhes: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

  // Image Editor State
  const [isEditMode, setIsEditMode] = useState(false);
  const [overriddenImages, setOverriddenImages] = useState<Record<string, string>>({});
  const [urlEditor, setUrlEditor] = useState<{ id: string, url: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('nutrye_image_overrides');
    if (saved) {
      try {
        setOverriddenImages(JSON.parse(saved));
      } catch (e) {
        console.error("Erro ao carregar imagens personalizadas", e);
      }
    }
  }, []);

  const saveImageOverride = (id: string, url: string) => {
    const newOverrides = { ...overriddenImages, [id]: url };
    setOverriddenImages(newOverrides);
    localStorage.setItem('nutrye_image_overrides', JSON.stringify(newOverrides));
    setUrlEditor(null);
  };

  const getImageUrl = (id: string, defaultUrl: string) => {
    return overriddenImages[id] || defaultUrl;
  };

  const handleImageEdit = (id: string, currentUrl: string) => {
    setUrlEditor({ id, url: currentUrl });
  };

  const [analysisForm, setAnalysisForm] = useState({
    objetivo: '',
    idade: '',
    nivelAtividade: '',
    preocupacao: ''
  });
  const [analysisRecommendations, setAnalysisRecommendations] = useState<any[]>([]);
  const [leadForm, setLeadForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    instagram: '',
    cidade: '',
    saudeMentalFisica: '',
    ansiedade: '',
    depressao: '',
    insonia: '',
    doresMusculares: '',
    quedaCabelo: '',
    fibromialgia: '',
    pressaoAlta: '',
    querEmagrecer: '',
    alergia: '',
    cirurgia: ''
  });

  const sendLeadToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { 
      nome, email, whatsapp, instagram, cidade, 
      saudeMentalFisica, ansiedade, depressao, insonia, 
      doresMusculares, quedaCabelo, fibromialgia, pressaoAlta, 
      querEmagrecer, alergia, cirurgia 
    } = leadForm;
    
    if (!nome || !whatsapp) {
      toast.error("Por favor, preencha pelo menos seu nome e WhatsApp.");
      return;
    }

    const message = `Olá Eneide! Venho da ficha de análise e quero mais informações.
    
*Dados do Cliente:*
👤 *Nome:* ${nome}
📧 *Email:* ${email || 'Não informado'}
📱 *WhatsApp:* ${whatsapp}
📸 *Instagram:* ${instagram || 'Não informado'}
📍 *Cidade:* ${cidade || 'Não informada'}

*Avaliação de Saúde:*
🧠 *Saúde Mental/Física:* ${saudeMentalFisica || 'Não informado'}
😰 *Ansiedade:* ${ansiedade || 'Não'}
😔 *Depressão:* ${depressao || 'Não'}
😴 *Insônia:* ${insonia || 'Não'}
💪 *Dores Musculares:* ${doresMusculares || 'Não'}
💇 *Queda de Cabelo:* ${quedaCabelo || 'Não'}
🩹 *Fibromialgia:* ${fibromialgia || 'Não'}
🩸 *Pressão Alta:* ${pressaoAlta || 'Não'}
⚖️ *Quer Emagrecer:* ${querEmagrecer || 'Não'}
🚫 *Alergias:* ${alergia || 'Nenhuma'}
🏥 *Cirurgias:* ${cirurgia || 'Nenhuma'}

*Objetivo da Análise:* ${
      analysisForm.objetivo === 'performance' ? 'Performance e Energia' :
      analysisForm.objetivo === 'peso' ? 'Controle de Peso' :
      analysisForm.objetivo === 'saude' ? 'Saúde e Imunidade' :
      analysisForm.objetivo === 'estetica' ? 'Estética e Longevidade' :
      analysisForm.objetivo === 'bemestar' ? 'Bem-estar e Digestão' : 'Não informado'
    }`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5571992719461?text=${encodedMessage}`, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  const runAnalysis = () => {
    let recommendations: any[] = [];
    const goal = analysisForm.objetivo;
    
    if (goal === 'performance') {
      recommendations = PRODUTOS.filter(p => ['creatina-po', 'creatina-capsula', 'burst-caffeine', 'maca-peruana', 'feno-grego'].includes(p.id));
    } else if (goal === 'peso') {
      recommendations = PRODUTOS.filter(p => ['burn-free', 'picolinato-cromo', 'burst-caffeine', 'ora-pro-nobis'].includes(p.id));
    } else if (goal === 'saude') {
      recommendations = PRODUTOS.filter(p => ['vitalli-az', 'omega-3', 'vitamina-d3-k2', 'vitamina-d3', 'vitamina-a', 'ferro-c', 'zinco-c', 'coenzima-q10', 'complexo-b', 'curmapro'].includes(p.id));
    } else if (goal === 'estetica') {
      recommendations = PRODUTOS.filter(p => ['colageno-hialuronico-biotina', 'vinoage', 'colageno-tipo-2', 'renoderme'].includes(p.id));
    } else if (goal === 'bemestar') {
      recommendations = PRODUTOS.filter(p => ['magne3', 'repouzz', 'triptofano', 'ora-pro-nobis', 'lactase'].includes(p.id));
    }

    setAnalysisRecommendations(recommendations);
  };

  const produtosFiltrados = categoriaAtiva === 'Todos' 
    ? PRODUTOS 
    : PRODUTOS.filter(p => p.categoria === categoriaAtiva);

  const getSeloImage = (id: string, defaultImg: string) => {
    return getImageUrl(id, defaultImg);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Toaster position="top-right" richColors />
        {/* Analysis Modal */}
      {isAnalysisModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy leading-none">Ficha de Análise Nutrye</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Recomendação Personalizada</p>
                </div>
              </div>
              <button onClick={() => setIsAnalysisModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              {analysisRecommendations.length === 0 ? (
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-2xl font-bold text-navy mb-6 text-center">Vamos encontrar os suplementos ideais para você</h4>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Qual seu principal objetivo?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: 'performance', label: 'Performance e Energia', icon: <Zap size={18} /> },
                          { id: 'peso', label: 'Controle de Peso', icon: <Flame size={18} /> },
                          { id: 'saude', label: 'Saúde e Imunidade', icon: <ShieldCheck size={18} /> },
                          { id: 'estetica', label: 'Estética e Longevidade', icon: <Sparkles size={18} /> },
                          { id: 'bemestar', label: 'Bem-estar e Digestão', icon: <Heart size={18} /> },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setAnalysisForm({ ...analysisForm, objetivo: opt.id })}
                            className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                              analysisForm.objetivo === opt.id 
                                ? 'border-primary bg-primary/5 text-primary' 
                                : 'border-gray-100 hover:border-primary/30 text-gray-600'
                            }`}
                          >
                            <div className={`${analysisForm.objetivo === opt.id ? 'text-primary' : 'text-gray-400'}`}>
                              {opt.icon}
                            </div>
                            <span className="font-bold text-sm">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Sua Idade</label>
                        <select 
                          className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                          value={analysisForm.idade}
                          onChange={(e) => setAnalysisForm({ ...analysisForm, idade: e.target.value })}
                        >
                          <option value="">Selecione...</option>
                          <option value="18-30">18 a 30 anos</option>
                          <option value="31-45">31 a 45 anos</option>
                          <option value="46-60">46 a 60 anos</option>
                          <option value="60+">Mais de 60 anos</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Nível de Atividade</label>
                        <select 
                          className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                          value={analysisForm.nivelAtividade}
                          onChange={(e) => setAnalysisForm({ ...analysisForm, nivelAtividade: e.target.value })}
                        >
                          <option value="">Selecione...</option>
                          <option value="sedentario">Sedentário</option>
                          <option value="leve">Leve (1-2x semana)</option>
                          <option value="moderado">Moderado (3-4x semana)</option>
                          <option value="intenso">Intenso (5x+ semana)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={runAnalysis}
                      disabled={!analysisForm.objetivo || !analysisForm.idade || !analysisForm.nivelAtividade}
                      className="w-full py-5 bg-navy text-white font-bold rounded-2xl hover:bg-primary transition-all shadow-xl shadow-navy/20 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                      Ver Minha Recomendação
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="text-center mb-10">
                    <h4 className="text-3xl font-black text-navy mb-2">Sua Lista Nutrye</h4>
                    <p className="text-gray-500">Com base no seu objetivo de <span className="font-bold text-primary">
                      {analysisForm.objetivo === 'performance' && 'Performance e Energia'}
                      {analysisForm.objetivo === 'peso' && 'Controle de Peso'}
                      {analysisForm.objetivo === 'saude' && 'Saúde e Imunidade'}
                      {analysisForm.objetivo === 'estetica' && 'Estética e Longevidade'}
                      {analysisForm.objetivo === 'bemestar' && 'Bem-estar e Digestão'}
                    </span></p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {analysisRecommendations.map((produto) => (
                      <div key={produto.id} className="flex gap-4 p-4 bg-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all group shadow-sm">
                        <div 
                          className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100 cursor-pointer"
                          onClick={() => setViewingDetails({ nome: produto.nome, detalhes: produto.detalhes })}
                        >
                          <img 
                            src={produto.imagem} 
                            alt={produto.nome} 
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/200x200/f8fafc/1e293b?text=${encodeURIComponent(produto.nome)}`;
                            }}
                          />
                        </div>
                        <div className="flex flex-col justify-between py-1 flex-grow">
                          <div>
                            <h5 className="font-bold text-navy leading-tight mb-1 text-sm">{produto.nome}</h5>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{produto.categoria}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <button 
                              onClick={() => setViewingDetails({ nome: produto.nome, detalhes: produto.detalhes })}
                              className="text-[10px] font-bold text-navy/60 uppercase hover:text-primary transition-colors flex items-center gap-1"
                            >
                              <Info size={12} />
                              Detalhes
                            </button>
                            <a 
                              href={produto.linkMercadoLivre} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-auto px-4 py-2 bg-navy text-white text-[10px] font-bold rounded-xl hover:bg-primary transition-all shadow-md shadow-navy/10 flex items-center gap-2"
                            >
                              Comprar
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <MessageCircle size={32} />
                      </div>
                      <div className="text-center sm:text-left">
                        <h5 className="font-bold text-navy mb-1 text-xl">Fale com a Eneide agora!</h5>
                        <p className="text-sm text-gray-500 leading-relaxed">Preencha seus dados abaixo para receber um acompanhamento personalizado e tirar todas as suas dúvidas.</p>
                      </div>
                    </div>

                    <form onSubmit={sendLeadToWhatsApp} className="space-y-6">
                      {/* Seção de Avaliação de Saúde */}
                      <div className="space-y-6 bg-white p-6 rounded-[32px] border border-gray-100">
                        <h6 className="font-bold text-navy flex items-center gap-2 mb-4">
                          <Heart size={18} className="text-primary" />
                          Avaliação de Saúde
                        </h6>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Como anda sua saúde mental e física?</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {['Boa', 'Ruim', 'Péssima', 'Mais ou Menos'].map((opt) => (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setLeadForm({ ...leadForm, saudeMentalFisica: opt })}
                                  className={`py-3 px-2 rounded-xl border-2 text-[10px] font-bold transition-all ${
                                    leadForm.saudeMentalFisica === opt 
                                      ? 'border-primary bg-primary/5 text-primary' 
                                      : 'border-gray-50 text-gray-400 hover:border-gray-200'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                              { id: 'ansiedade', label: 'Você tem ansiedade?' },
                              { id: 'depressao', label: 'Você tem depressão?' },
                              { id: 'insonia', label: 'Você tem insônia?' },
                              { id: 'doresMusculares', label: 'Dores musculares?' },
                              { id: 'quedaCabelo', label: 'Queda de cabelos?' },
                              { id: 'fibromialgia', label: 'Sofre de fibromialgia?' },
                              { id: 'pressaoAlta', label: 'Possui pressão alta?' },
                              { id: 'querEmagrecer', label: 'Quer emagrecer?' },
                            ].map((item) => (
                              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                                <span className="text-[11px] font-bold text-navy">{item.label}</span>
                                <div className="flex gap-2">
                                  {['Sim', 'Não'].map((opt) => (
                                    <button
                                      key={opt}
                                      type="button"
                                      onClick={() => setLeadForm({ ...leadForm, [item.id]: opt })}
                                      className={`w-12 py-1.5 rounded-lg border text-[10px] font-bold transition-all ${
                                        (leadForm as any)[item.id] === opt 
                                          ? 'border-primary bg-primary text-white' 
                                          : 'border-gray-100 text-gray-400 hover:border-gray-200'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Tem alergia? Explique qual:</label>
                              <input 
                                type="text" 
                                placeholder="Descreva aqui..."
                                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none text-sm"
                                value={leadForm.alergia}
                                onChange={(e) => setLeadForm({ ...leadForm, alergia: e.target.value })}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Já fez alguma cirurgia? Qual?</label>
                              <input 
                                type="text" 
                                placeholder="Descreva aqui..."
                                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none text-sm"
                                value={leadForm.cirurgia}
                                onChange={(e) => setLeadForm({ ...leadForm, cirurgia: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
                          <input 
                            type="text" 
                            placeholder="Seu nome"
                            required
                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                            value={leadForm.nome}
                            onChange={(e) => setLeadForm({ ...leadForm, nome: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                          <input 
                            type="email" 
                            placeholder="seu@email.com"
                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                            value={leadForm.email}
                            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">WhatsApp</label>
                          <input 
                            type="tel" 
                            placeholder="(00) 00000-0000"
                            required
                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                            value={leadForm.whatsapp}
                            onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Instagram</label>
                          <input 
                            type="text" 
                            placeholder="@seuusuario"
                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                            value={leadForm.instagram}
                            onChange={(e) => setLeadForm({ ...leadForm, instagram: e.target.value })}
                          />
                        </div>
                        <div className="sm:col-span-2 space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Cidade</label>
                          <input 
                            type="text" 
                            placeholder="Sua cidade"
                            className="w-full p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy focus:ring-2 focus:ring-primary outline-none"
                            value={leadForm.cidade}
                            onChange={(e) => setLeadForm({ ...leadForm, cidade: e.target.value })}
                          />
                        </div>
                      </div>
                      <button 
                        type="submit"
                        className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-4"
                      >
                        <MessageCircle size={24} />
                        Enviar Dados e Falar com Eneide
                      </button>
                    </form>
                  </div>

                  <button 
                    onClick={() => {
                      setAnalysisRecommendations([]);
                      setAnalysisForm({ objetivo: '', idade: '', nivelAtividade: '', preocupacao: '' });
                    }}
                    className="mt-8 w-full py-4 text-gray-400 font-bold hover:text-navy transition-colors"
                  >
                    Refazer Análise
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-[90] flex flex-col gap-4 items-end">
        <button 
          onClick={() => setIsAnalysisModalOpen(true)}
          className="px-6 py-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center gap-3 hover:scale-110 hover:bg-primary-dark transition-all group animate-bounce-slow"
          title="Fazer Ficha de Análise"
        >
          <ClipboardList size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm">Ficha de Análise</span>
        </button>
      </div>


      {/* Details Viewer Modal (Leitor do Catálogo Premium) */}
      {viewingDetails && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-3xl rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy text-white rounded-2xl flex items-center justify-center shadow-lg shadow-navy/20">
                  <Info size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy leading-none">{viewingDetails.nome}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Ficha Técnica Nutrye</p>
                </div>
              </div>
              <button 
                onClick={() => setViewingDetails(null)} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
              <div className="max-w-2xl mx-auto">
                <div className="prose prose-slate max-w-none">
                  {/* Formatação Inteligente do Texto */}
                  <div className="space-y-8">
                    {viewingDetails.detalhes ? (
                      viewingDetails.detalhes.split('\n\n').map((paragrafo, idx) => {
                        if (paragrafo.includes(':')) {
                          const [titulo, ...resto] = paragrafo.split(':');
                          return (
                            <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                              <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-2">{titulo}</h4>
                              <p className="text-navy font-medium leading-relaxed">{resto.join(':').trim()}</p>
                            </div>
                          );
                        }
                        return (
                          <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                            {paragrafo}
                          </p>
                        );
                      })
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ClipboardList size={32} className="text-gray-300" />
                        </div>
                        <p className="text-gray-400 font-medium">Nenhuma informação detalhada disponível no momento.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Pureza', value: '100% Filtrado' },
                    { label: 'Origem', value: 'Nutrye Lab' },
                    { label: 'Padrão', value: 'FDA Approved' },
                    { label: 'Qualidade', value: 'Premium' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">{item.label}</p>
                      <p className="text-[10px] font-bold text-navy uppercase">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-center">
              <button 
                onClick={() => setViewingDetails(null)}
                className="px-12 py-4 bg-navy text-white font-bold rounded-2xl hover:bg-primary transition-all shadow-xl shadow-navy/20 flex items-center gap-2"
              >
                Concluir Leitura
                <Check size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl border border-navy/10">N</div>
            <span className="text-xl font-bold tracking-tight text-navy">NUTRYE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
            <button 
              onClick={() => setIsAnalysisModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-primary-dark transition-all font-bold rounded-full shadow-lg shadow-primary/20 animate-pulse-slow"
            >
              <ClipboardList size={18} />
              Ficha de Análise
            </button>
            <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
            <a href="#certificacoes" className="hover:text-primary transition-colors">Certificações</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a>
            <a 
              href="https://wa.me/5571992719461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors font-semibold"
            >
              <MessageCircle size={16} />
              Falar com Especialista
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all"
              title="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a 
              href="https://www.mercadolivre.com.br/pagina/de20240923064439#from=share_eshop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-full hover:bg-primary transition-all flex items-center gap-2 shadow-lg shadow-navy/20"
            >
              <ShoppingBag size={18} />
              Nossa Loja
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white pt-20 animate-in slide-in-from-top duration-300">
          <div className="p-6 flex flex-col gap-6 text-lg font-bold text-navy">
            <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors border-b border-gray-50 pb-4">Produtos</a>
            <button 
              onClick={() => {
                setIsAnalysisModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 px-6 py-4 bg-primary/10 text-primary rounded-2xl hover:bg-primary/20 transition-all text-left font-bold"
            >
              <ClipboardList size={24} className="text-primary" />
              Ficha de Análise
            </button>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors border-b border-gray-50 pb-4">Blog</a>
            <a href="#certificacoes" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors border-b border-gray-50 pb-4">Certificações</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors border-b border-gray-50 pb-4">Sobre Nós</a>
            
            <a 
              href="https://wa.me/5571992719461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary pt-4"
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-green-100">
              <Award size={14} />
              Qualidade Kosher & FDA
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.1] mb-8">
              A saúde real que <span className="text-primary">cuida de você.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mb-10 leading-relaxed">
              Há 26 anos transformando vidas com suplementos de alta performance e pureza garantida. Encontre o ideal para você.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                Ver Produtos
              </a>
              <button 
                onClick={() => setIsAnalysisModalOpen(true)}
                className="px-8 py-4 bg-navy text-white font-bold rounded-2xl hover:bg-navy-dark transition-all flex items-center gap-3 shadow-2xl shadow-navy/30 ring-4 ring-navy/5 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ClipboardList size={20} className="text-white" />
                </div>
                Fazer Ficha de Análise
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
            <div className="relative bg-white p-4 md:p-8 rounded-[40px] shadow-2xl border border-gray-100">
              <img 
                src={getImageUrl('hero', SITE_IMAGES.hero)} 
                alt="Nutrye Health & Performance" 
                className="rounded-[24px] md:rounded-[32px] w-full h-auto object-cover min-h-[400px] shadow-inner"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/800x600/10b981/ffffff?text=NUTRYE+HEALTH"; }}
              />
              
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('hero', getImageUrl('hero', SITE_IMAGES.hero))}
                  className="absolute top-12 right-12 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-20"
                  title="Trocar imagem do Hero"
                >
                  <Camera size={24} />
                </button>
              )}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-primary rounded-2xl flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certificação</p>
                  <p className="text-sm font-bold text-navy">100% Puro & Seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 border border-gray-100">
              <History size={28} />
            </div>
            <h3 className="text-xl font-bold">26 Anos de História</h3>
            <p className="text-gray-500 leading-relaxed">Uma jornada dedicada à excelência em suplementação e bem-estar para milhares de brasileiros.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 border border-gray-100">
              <FlaskConical size={28} />
            </div>
            <h3 className="text-xl font-bold">Padrão Internacional</h3>
            <p className="text-gray-500 leading-relaxed">Produtos desenvolvidos sob rigorosos padrões Kosher e FDA, garantindo máxima pureza.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 border border-gray-100">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold">Confiança Garantida</h3>
            <p className="text-gray-500 leading-relaxed">Cada lote é testado para assegurar que você receba exatamente o que seu corpo precisa.</p>
          </div>
        </div>
      </section>

      {/* Why Supplements Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight mb-8">
                Por que a <span className="text-primary italic">Suplementação</span> é essencial hoje?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Zap className="text-amber-500" />,
                    title: "Energia Constante",
                    desc: "Combate o cansaço crônico da rotina moderna com nutrientes que potencializam suas mitocôndrias."
                  },
                  {
                    icon: <Heart className="text-red-500" />,
                    title: "Saúde Cardiovascular",
                    desc: "Proteção avançada para o seu coração com ácidos graxos e antioxidantes de pureza garantida."
                  },
                  {
                    icon: <Sparkles className="text-primary" />,
                    title: "Beleza de Dentro para Fora",
                    desc: "Pele, cabelos e unhas mais fortes através da nutrição celular profunda."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[60px] translate-x-4 translate-y-4 -z-10 blur-2xl"></div>
              <img 
                src={getImageUrl('importancia', SITE_IMAGES.importancia)} 
                alt="Saúde e Bem-estar Nutrye" 
                className="w-full h-auto rounded-[60px] shadow-2xl border-8 border-white object-cover aspect-[4/5]"
              />
              
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('importancia', getImageUrl('importancia', SITE_IMAGES.importancia))}
                  className="absolute top-8 right-8 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-20"
                  title="Trocar imagem da Seção"
                >
                  <Camera size={24} />
                </button>
              )}
              <div className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-full text-white w-40 h-40 flex flex-col items-center justify-center shadow-2xl animate-bounce-slow">
                <span className="text-2xl font-bold">+ Vitalidade</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Nutrye Oficial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Nossa Linha Oficial</h2>
              <p className="text-lg text-gray-500 max-w-xl">Produtos selecionados para cada necessidade do seu corpo e mente.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {['Todos', 'Performance', 'Saúde', 'Bem-Estar', 'Estética', 'Peso'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategoriaAtiva(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    categoriaAtiva === cat ? 'bg-navy text-white' : 'bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtosFiltrados.map((produto) => {
              const currentImageUrl = getImageUrl(`prod_${produto.id}`, produto.imagem);
              return (
                <ProductCard 
                  key={produto.id} 
                  produto={{
                    ...produto,
                    imagem: currentImageUrl
                  }} 
                  onViewDetails={(nome, detalhes) => setViewingDetails({ nome, detalhes })}
                  onEditImage={isEditMode ? () => handleImageEdit(`prod_${produto.id}`, currentImageUrl) : undefined}
                />
              );
            })}
          </div>

          <div className="mt-20 p-12 bg-gray-900 rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Não encontrou o que procurava?</h3>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Visite nossa loja completa no Mercado Livre e confira centenas de outros produtos com entrega rápida para todo o Brasil.</p>
              <a 
                href="https://www.mercadolivre.com.br/pagina/de20240923064439#from=share_eshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl"
              >
                Ver Loja Completa no ML
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações Section */}
      <section id="certificacoes" className="py-24 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">CERTIFICAÇÕES E SELOS DE EXCELÊNCIA</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Garantimos a pureza e a qualidade em cada etapa do nosso processo produtivo.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Moeda de Ouro - Kosher */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm border border-green-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('selo_kosher', getImageUrl('selo_kosher', "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=200&auto=format&fit=crop"))}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-20 hover:scale-110"
                >
                  <Camera size={14} />
                </button>
              )}
              <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-1 shadow-lg border-4 border-amber-400 ring-8 ring-amber-50">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src={getSeloImage('selo_kosher', "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=200&auto=format&fit=crop")} 
                    alt="Moeda de Ouro KOSHER PARVE" 
                    className="max-w-full max-h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f8fafc/1e293b?text=KOSHER"; }}
                  />
                </div>
              </div>
              <h4 className="text-sm font-bold text-navy mb-3">KOSHER PARVE (NITIDEZ MÁXIMA)</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Este selo é fundamental para atestar a pureza e o rigor do processo de fabricação. Círculo com borda dourada e texto perfeitamente legível.
              </p>
            </div>

            {/* Moeda de Prata - FDA */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm border border-green-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('selo_fda', getImageUrl('selo_fda', "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200&auto=format&fit=crop"))}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-20 hover:scale-110"
                >
                  <Camera size={14} />
                </button>
              )}
              <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-1 shadow-lg border-4 border-slate-400 ring-8 ring-slate-50">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src={getSeloImage('selo_fda', "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200&auto=format&fit=crop")} 
                    alt="Moeda de Prata FDA APPROVED" 
                    className="max-w-full max-h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f8fafc/1e293b?text=FDA"; }}
                  />
                </div>
              </div>
              <h4 className="text-sm font-bold text-navy mb-3">FDA APPROVED (INSTALAÇÕES)</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Garante que as instalações seguem as normas internacionais de segurança alimentar. Destaque para a FDA com nitidez total.
              </p>
            </div>

            {/* Moeda de Bronze - Non-GMO */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm border border-green-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('selo_nongmo', getImageUrl('selo_nongmo', "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop"))}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-20 hover:scale-110"
                >
                  <Camera size={14} />
                </button>
              )}
              <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-1 shadow-lg border-4 border-orange-400 ring-8 ring-orange-50">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src={getSeloImage('selo_nongmo', "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop")} 
                    alt="Moeda de Bronze NON-GMO" 
                    className="max-w-full max-h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f8fafc/1e293b?text=NON-GMO"; }}
                  />
                </div>
              </div>
              <h4 className="text-sm font-bold text-navy mb-3">NON-GMO PROJECT VERIFIED</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Prova que os produtos são naturais e livres de transgênicos. Borboleta e texto vibrantes nas cores originais.
              </p>
            </div>

            {/* Moeda de Metal Escovado - MEG-3 */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm border border-green-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('selo_meg3', getImageUrl('selo_meg3', "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=200&auto=format&fit=crop"))}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-20 hover:scale-110"
                >
                  <Camera size={14} />
                </button>
              )}
              <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-1 shadow-lg border-4 border-gray-400 ring-8 ring-gray-50">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src={getSeloImage('selo_meg3', "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=200&auto=format&fit=crop")} 
                    alt="Moeda de Metal Escovado MEG-3" 
                    className="max-w-full max-h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f8fafc/1e293b?text=MEG-3"; }}
                  />
                </div>
              </div>
              <h4 className="text-sm font-bold text-navy mb-3">MEG-3 (PUREZA DO ÔMEGA 3)</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Certifica a origem sustentável e a pureza máxima do óleo de peixe. Texto "MEG-3 TRUSTED SOURCE OMEGA-3" perfeitamente visível.
              </p>
            </div>

            {/* Moeda de Ouro - Compromisso */}
            <div className="bg-white p-6 rounded-[40px] shadow-sm border border-green-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('selo_compromisso', getImageUrl('selo_compromisso', "https://images.unsplash.com/photo-1523213139764-4152559dd7be?q=80&w=200&auto=format&fit=crop"))}
                  className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-20 hover:scale-110"
                >
                  <Camera size={14} />
                </button>
              )}
              <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-1 shadow-lg border-4 border-amber-400 ring-8 ring-amber-50">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <img 
                    src={getSeloImage('selo_compromisso', "https://images.unsplash.com/photo-1523213139764-4152559dd7be?q=80&w=200&auto=format&fit=crop")} 
                    alt="Moeda de Ouro Compromisso" 
                    className="max-w-full max-h-full object-contain rounded-full" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x200/f8fafc/1e293b?text=2000"; }}
                  />
                </div>
              </div>
              <h4 className="text-sm font-bold text-navy mb-3">COMPROMISSO GARANTIDO</h4>
              <p className="text-gray-500 text-[10px] leading-relaxed">
                Apenas ela, com o relevo nítido e fundo transparente. Compromisso garantido com a sua saúde desde o ano 2000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Artigos & Dicas</span>
            <h2 className="text-4xl font-bold text-navy mt-4 mb-6">Blog Nutrye</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row relative group/blog">
            <div className="md:w-1/2 aspect-square md:aspect-auto md:h-[600px] relative">
              <img 
                src={getImageUrl('blog', SITE_IMAGES.blog)} 
                alt="Lifestyle Saudável Nutrye" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {isEditMode && (
                <button 
                  onClick={() => handleImageEdit('blog', getImageUrl('blog', SITE_IMAGES.blog))}
                  className="absolute top-8 left-8 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-20"
                  title="Trocar imagem do Blog"
                >
                  <Camera size={24} />
                </button>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Inauguração</span>
                <span className="text-gray-400 text-sm">29 de Março, 2026</span>
              </div>
              <div className="whitespace-pre-wrap">
                <h3 className="text-3xl font-bold text-navy mb-6 leading-tight">
                  Cansaço constante ou dores após o treino? Descubra como a suplementação correta pode transformar seu dia.
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    Muitas vezes, a falta de energia não é apenas sono acumulado, mas a falta de nutrientes essenciais que o corpo precisa para produzir combustível. Na Nutrye, entendemos isso há mais de 24 anos.
                  </p>
                  <p>
                    Para quem busca <strong>Energia e Disposição</strong>, a combinação de <strong>Maca Peruana e Burst Caffeine</strong> é imbatível. Enquanto a Maca atua no equilíbrio do organismo e vitalidade a longo prazo, a Burst Caffeine oferece o foco necessário para vencer a rotina.
                  </p>
                  <p>
                    Já para quem sofre com <strong>Dores Musculares e Articulares</strong>, a ciência evoluiu. O <strong>Osteolig (Colágeno Tipo II)</strong> atua diretamente na recuperação das articulações, enquanto o <strong>Magune3</strong> relaxa a musculatura, prevenindo cãibras e melhorando a qualidade do descanso.
                  </p>
                  <p>
                    Com selos de pureza internacional (Kosher e FDA), a Nutrye Salvador garante que você receba apenas o melhor da natureza.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-bold text-navy">Equipe Nutrye</p>
                  <p className="text-sm text-gray-400">Especialistas em Nutrição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="sobre" className="bg-white border-t border-gray-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl border border-navy/10">N</div>
                <span className="text-xl font-bold tracking-tight text-navy">NUTRYE</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
                Comprometidos com a saúde e longevidade através da nutrição avançada. 26 anos de tradição e confiança.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <a 
                  href="https://www.mercadolivre.com.br/pagina/de20240923064439#from=share_eshop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg"
                >
                  <ShoppingBag size={18} />
                  Nossa Loja no ML
                </a>
                <a 
                  href="https://wa.me/5571992719461" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg text-sm text-center"
                >
                  <MessageCircle size={18} />
                  Dúvidas sobre o produto? Chame no WhatsApp: (71) 99271-9461
                </a>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nutryesaudeevida?igsh=MXB5emE3NjNyZjdybA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://youtube.com/@eneideconsultora?si=l3dmjGdQH59OrnDq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                  title="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-6">Categorias</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#produtos" className="hover:text-primary transition-colors">Performance</a></li>
                <li><a href="#produtos" className="hover:text-primary transition-colors">Saúde & Imunidade</a></li>
                <li><a href="#produtos" className="hover:text-primary transition-colors">Bem-Estar & Sono</a></li>
                <li><a href="#produtos" className="hover:text-primary transition-colors">Estética & Pele</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-6">Institucional</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">Nossa História</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Qualidade Kosher</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Padrão FDA</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
              © 2026 Nutrye Suplementos. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-navy transition-colors">Privacidade</a>
              <a href="#" className="hover:text-navy transition-colors">Termos</a>
              <a href="#" className="hover:text-navy transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante de Edição */}
      <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start gap-4">
        {isEditMode && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-navy text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Modo de Edição Ativo</span>
            <button 
              onClick={() => {
                if(confirm("Deseja apagar todas as imagens que você trocou e voltar ao padrão original?")) {
                  localStorage.removeItem('nutrye_image_overrides');
                  window.location.reload();
                }
              }}
              className="ml-4 text-[10px] uppercase font-black text-gray-400 hover:text-white underline tracking-widest"
            >
              Resetar Tudo
            </button>
          </motion.div>
        )}
        
        <button 
          onClick={() => setIsEditMode(!isEditMode)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${isEditMode ? 'bg-primary text-white' : 'bg-navy text-white'}`}
          title={isEditMode ? "Salvar e Sair" : "Editar Imagens do Site"}
        >
          {isEditMode ? <Save size={28} /> : <Settings size={28} />}
        </button>
      </div>

      {/* URL Editor Modal */}
      <AnimatePresence>
        {urlEditor && (
          <div 
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-navy/60 backdrop-blur-sm"
            onClick={() => setUrlEditor(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Camera size={20} />
                </div>
                <h3 className="text-xl font-bold text-navy">Substituir Imagem</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Cole abaixo o link (URL) da nova imagem.
                </p>
                
                {/* Dica de Tamanho */}
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Tamanho Recomendado</p>
                  <p className="text-sm font-bold text-navy">
                    {urlEditor.id.includes('prod') ? '800 x 800 px (Quadrado)' : 
                     urlEditor.id.includes('hero') ? '1280 x 800 px (Horizontal)' :
                     urlEditor.id.includes('selo') ? '400 x 400 px (Quadrado)' : '1200 x 600 px'}
                  </p>
                </div>

                <input 
                  type="text" 
                  autoFocus
                  defaultValue={urlEditor.url}
                  id="image-url-input"
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-medium focus:ring-2 focus:ring-primary outline-none transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const input = document.getElementById('image-url-input') as HTMLInputElement;
                      if (input.value.trim()) {
                        saveImageOverride(urlEditor.id, input.value.trim());
                        toast.success("Imagem atualizada com sucesso!");
                      }
                    }
                    if (e.key === 'Escape') setUrlEditor(null);
                  }}
                />
                
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setUrlEditor(null)}
                    className="flex-1 py-4 text-gray-400 font-bold hover:bg-gray-50 rounded-2xl transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => {
                      const input = document.getElementById('image-url-input') as HTMLInputElement;
                      if (input.value.trim()) {
                        saveImageOverride(urlEditor.id, input.value.trim());
                        toast.success("Imagem atualizada com sucesso!");
                      }
                    }}
                    className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
