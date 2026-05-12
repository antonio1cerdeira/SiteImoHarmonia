import { AlertTriangle } from 'lucide-react';

export default function PDMAnalyzer() {
  return (
    <div className="w-full h-full min-h-[900px] bg-[var(--surface-container)] rounded-2xl p-8 flex flex-col justify-between border border-[var(--outline)]">
      <style>{`
        @keyframes pulseArt {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 75%; }
        }

        .art-active {
          animation: pulseArt 3s ease-in-out infinite;
        }

        .progress-fill {
          animation: progressBar 4s ease-in-out infinite alternate;
        }

        .label-mono {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 10px;
        }

        .label-micro {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 8px;
        }

        .text-line {
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.3px;
        }

        .audit-card {
          background: linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%);
          border-left: 4px solid rgb(217, 119, 6);
          min-height: 520px;
        }

        .audit-card-inner {
          display: flex;
          flex-direction: column;
          gap: 28px;
          height: 100%;
        }

        .metric-row {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 0.8fr;
          gap: 12px;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(217, 119, 6, 0.15);
        }

        .metric-row:last-of-type {
          border-bottom: none;
        }

        .metric-label {
          font-size: 10px;
          color: rgba(224, 227, 232, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 12px;
          font-weight: 500;
        }

        .metric-proposed {
          color: rgb(248, 113, 113);
        }

        .metric-limit {
          color: rgb(239, 68, 68);
          background: rgba(239, 68, 68, 0.12);
          padding: 4px 10px;
          border-radius: 3px;
          font-weight: 600;
        }

        .bullet-graph {
          margin: 16px 0 12px 0;
          padding: 12px 0;
          border-top: 1px solid rgba(217, 119, 6, 0.2);
          border-bottom: 1px solid rgba(217, 119, 6, 0.2);
        }

        .bullet-label {
          font-size: 9px;
          color: rgba(224, 227, 232, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 8px;
        }

        .bullet-bar-container {
          position: relative;
          height: 28px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
          overflow: hidden;
        }

        .bullet-range {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%);
          border-right: 2px solid rgba(217, 119, 6, 0.3);
        }

        .bullet-measure {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bullet-measure.limit {
          background: rgba(239, 68, 68, 0.15);
          border-right: 3px solid rgb(239, 68, 68);
          color: rgb(239, 68, 68);
        }

        .bullet-measure.proposed {
          background: rgba(248, 113, 113, 0.2);
          border-right: 3px dashed rgb(248, 113, 113);
          color: rgb(248, 113, 113);
        }

        .bullet-value {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 10px;
          font-weight: 600;
        }

        .bullet-legend {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          font-size: 9px;
        }

        .bullet-legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .bullet-legend-marker {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .bullet-legend-limit {
          background: rgb(239, 68, 68);
        }

        .bullet-legend-proposed {
          border: 2px dashed rgb(248, 113, 113);
          background: transparent;
        }

        .grc-button {
          font-size: 9px;
          padding: 6px 14px;
          border: 1px solid rgb(217, 119, 6);
          border-radius: 4px;
          background: transparent;
          color: rgb(217, 119, 6);
          cursor: pointer;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .grc-button:hover {
          background: rgba(217, 119, 6, 0.15);
          border-color: rgb(217, 119, 6);
        }

        .confidence-badge {
          display: inline-block;
          font-size: 8px;
          padding: 5px 10px;
          border-radius: 3px;
          background: rgba(217, 119, 6, 0.2);
          color: rgb(217, 119, 6);
          font-weight: 600;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }
      `}</style>

      {/* Header */}
      <div className="space-y-2">
        <div className="label-mono uppercase tracking-widest text-[var(--text-muted)] opacity-50 text-[9px]">
          PDM_ImoHarmonia.pdf — ARTIGOS IDENTIFICADOS: 847
        </div>
        <div className="h-px border-b border-[var(--outline-variant)] opacity-30" />
      </div>

      {/* Top Articles Section - Compact */}
      <div className="space-y-1.5">
        {/* Article 1 */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] text-[var(--text-muted)] opacity-70 flex-1">
            Afastamentos mínimos de 5 metros às divisões interiores de edifícios já implantados
          </p>
          <span className="label-micro text-[var(--primary)] font-medium whitespace-nowrap text-[8px]">ART. 14º</span>
        </div>

        {/* Article 2 */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] text-[var(--text-muted)] opacity-70 flex-1 art-active" style={{ animationDelay: '0.8s' }}>
            Taxa de ocupação máxima de 60% da parcela em zona mista
          </p>
          <span className="label-micro text-[var(--primary)] font-medium whitespace-nowrap text-[8px]">ART. 32º</span>
        </div>

        {/* Article 3 */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] text-[var(--text-muted)] opacity-70 flex-1 art-active" style={{ animationDelay: '1.6s' }}>
            Estacionamento mínimo: 1 lugar por 50m² de construção residencial
          </p>
          <span className="label-micro text-[var(--primary)] font-medium whitespace-nowrap text-[8px]">ART. 67º</span>
        </div>
      </div>

      {/* Critical Article - Expanded Audit Diagnostic Card */}
      <div className="flex-grow flex items-center py-4">
        <div className="audit-card rounded p-10 w-full">
          <div className="audit-card-inner">
            {/* Header */}
            <div className="flex items-center gap-3 pb-2 border-b border-amber-600/25">
              <AlertTriangle size={24} className="text-amber-600 flex-shrink-0" strokeWidth={2.5} />
              <div>
                <p className="label-mono uppercase tracking-widest text-amber-600 font-semibold text-[12px]">
                  Detetada Não Conformidade — ART. 45º
                </p>
              </div>
            </div>

            {/* Technical Metrics */}
            <div className="space-y-4">
              <p className="metric-label text-[11px] font-semibold">Validação Técnica</p>
              <div className="metric-row">
                <span className="metric-label text-[11px]">Altura da Cércea (Máxima)</span>
                <span className="metric-value metric-proposed text-[14px]">12.50m</span>
                <span className="metric-value metric-limit text-[13px] py-1">9.00m</span>
              </div>
            </div>

            {/* Bullet Graph Visualization */}
            <div className="bullet-graph">
              <div className="bullet-label text-[11px] font-semibold mb-4">Comparação Visual — Não Conformidade Detectada</div>
              <div className="bullet-bar-container" style={{ height: '40px' }}>
                <div className="bullet-range" style={{ width: '75%' }} />
                <div className="bullet-measure limit" style={{ width: '60%' }}>
                  <span className="bullet-value text-[11px]">LIMITE</span>
                </div>
                <div className="bullet-measure proposed" style={{ width: '83.3%' }}>
                  <span className="bullet-value text-[11px]">PROPOSTO</span>
                </div>
              </div>
              <div className="bullet-legend mt-3">
                <div className="bullet-legend-item">
                  <div className="bullet-legend-marker bullet-legend-limit" />
                  <span className="text-[9px] text-amber-600 font-medium">9.00m (PDM Limit)</span>
                </div>
                <div className="bullet-legend-item">
                  <div className="bullet-legend-marker bullet-legend-proposed" />
                  <span className="text-[9px] text-amber-600 font-medium">12.50m (Proposed)</span>
                </div>
              </div>
            </div>

            {/* Legal Context */}
            <div className="space-y-3 flex-grow">
              <p className="metric-label text-[11px] font-semibold">Contexto Legal & Fundamentação Técnica</p>
              <p className="text-[12px] text-amber-600/90 leading-relaxed">
                O plano proposto excede o índice de ocupação para a Zona Rústica H1 conforme o PDM da Guarda. A altura máxima permitida é <span className="font-semibold text-amber-600">9.00 metros</span>, enquanto a proposta apresenta <span className="font-semibold text-amber-600">12.50 metros</span>, representando um desvio crítico de <span className="font-semibold text-red-500">+38.9%</span> acima do limite legal. Esta não-conformidade requer ajuste do projeto ou aprovação especial da câmara municipal.
              </p>
            </div>

            {/* Footer with Confidence & Button */}
            <div className="flex items-center justify-between pt-6 border-t border-amber-600/30">
              <span className="confidence-badge">AI Confidence: 98.4%</span>
              <button className="grc-button text-[10px] py-2 px-4">Verificar Fonte PDF</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Article */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] text-[var(--text-muted)] opacity-70 flex-1 art-active" style={{ animationDelay: '2.4s' }}>
            Áreas verdes públicas obrigatórias: mínimo 15% em operações de loteamento
          </p>
          <span className="label-micro text-[var(--primary)] font-medium whitespace-nowrap text-[8px]">ART. 89º</span>
        </div>
      </div>
      </div>
  );
}
