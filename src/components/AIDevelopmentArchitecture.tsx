import React from 'react';

export default function AIDevelopmentArchitecture() {
  return (
    <div className="relative w-full bg-surface-dim rounded-xl border border-outline-variant p-4 md:p-6 lg:p-8 2xl:p-12 overflow-hidden flex flex-col items-center font-body-md text-on-surface">
      
      {/* Grid Background overlay for texture */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center z-10 mb-16">
        <h3 className="font-headline-md text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide">
          AI Development Technical Architecture
        </h3>
        <p className="text-on-surface-variant font-label-sm uppercase tracking-widest text-opacity-70">
          End-to-End System Flow: Business Need to Outcome
        </p>
      </div>

      {/* Main Diagram Area */}
      <div className="relative w-full max-w-7xl z-10 flex flex-col lg:flex-row justify-between items-stretch gap-4 lg:gap-3 2xl:gap-6">
        
        {/* Col 1: Business Need */}
        <div className="flex-1 flex flex-col items-center min-w-[160px]">
          <div className="w-full h-full border-2 border-outline-variant rounded-2xl bg-surface/50 p-4 flex flex-col">
            <div className="text-center font-semibold mb-6 uppercase text-sm border-b border-outline-variant pb-3 tracking-wider">Business Need</div>
            <div className="flex flex-col gap-4 flex-grow justify-center">
              <NodeItem text="Problem Statement" />
              <NodeItem text="Market Analysis" />
              <NodeItem text="User Requirements" />
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <Arrow />

        {/* Col 2: Data & Systems */}
        <div className="flex-1 flex flex-col items-center min-w-[200px]">
          <div className="w-full h-full border-2 border-outline-variant rounded-2xl bg-surface/50 p-4 flex flex-col">
            <div className="text-center font-semibold mb-6 uppercase text-sm border-b border-outline-variant pb-3 tracking-wider">Data & Systems</div>
            <div className="grid grid-cols-2 gap-3 flex-grow items-center">
              <NodeItem text="Data Lakes & Warehouses" icon="database" />
              <NodeItem text="ETL/ELT Pipelines" icon="account_tree" />
              <NodeItem text="Source Systems (CRM, ERP, IoT)" icon="dns" className="col-span-2" />
              <NodeItem text="Data Governance" icon="policy" />
              <NodeItem text="Feature Store" icon="category" />
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <Arrow />

        {/* Col 3: AI Engine */}
        <div className="flex-[1.5] flex flex-col items-center min-w-[300px]">
          <div className="w-full h-full border-2 border-outline-variant rounded-2xl bg-surface/50 p-4 flex flex-col">
            <div className="text-center font-semibold mb-6 uppercase text-sm border-b border-outline-variant pb-3 tracking-wider">AI Engine</div>
            
            <div className="flex flex-col gap-5 flex-grow justify-center">
              {/* Sub-block 1 */}
              <div className="border border-primary/30 rounded-xl p-4 bg-primary/5 relative">
                <div className="text-center font-semibold mb-4 text-xs uppercase text-primary tracking-wider">Model Development</div>
                <div className="grid grid-cols-2 gap-3">
                  <NodeItem text="Algorithm Selection" />
                  <NodeItem text="Model Training" />
                  <NodeItem text="Hyperparameter Tuning" />
                  <NodeItem text="Experiment Tracking (MLflow)" />
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center text-on-surface-variant -my-2">
                <span className="material-symbols-outlined">arrow_downward</span>
              </div>

              {/* Sub-block 2 */}
              <div className="border border-primary/30 rounded-xl p-4 bg-primary/5">
                <div className="text-center font-semibold mb-4 text-xs uppercase text-primary tracking-wider">Model Registry & Deployment</div>
                <div className="grid grid-cols-2 gap-3">
                  <NodeItem text="Model Versioning" />
                  <NodeItem text="Containerization (Docker)" />
                  <NodeItem text="Inference Server (Kubernetes)" />
                  <NodeItem text="Monitoring & Drift Detection" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow 3 */}
        <Arrow />

        {/* Col 4: Workflow Integration */}
        <div className="flex-1 flex flex-col items-center min-w-[140px] 2xl:min-w-[180px]">
          <div className="w-full h-full border-2 border-outline-variant rounded-2xl bg-surface/50 p-4 flex flex-col">
            <div className="text-center font-semibold mb-6 uppercase text-sm border-b border-outline-variant pb-3 tracking-wider">Workflow Integration</div>
            <div className="flex flex-col gap-4 flex-grow justify-center relative">
              <NodeItem text="API Gateway & Microservices" />
              <NodeItem text="Application Logic" />
              <NodeItem text="User Interface/UX" />
              <NodeItem text="Automation (RPA)" />
              <NodeItem text="Feedback Loop" />
            </div>
          </div>
        </div>

        {/* Arrow 4 */}
        <Arrow />

        {/* Col 5: Business Outcome */}
        <div className="flex-1 flex flex-col items-center min-w-[140px] 2xl:min-w-[180px]">
          <div className="w-full h-full border-2 border-outline-variant rounded-2xl bg-surface/50 p-4 flex flex-col">
            <div className="text-center font-semibold mb-6 uppercase text-sm border-b border-outline-variant pb-3 tracking-wider">Business Outcome</div>
            <div className="flex flex-col gap-4 flex-grow justify-center">
              <NodeItem text="Increased Efficiency" />
              <NodeItem text="Revenue Growth" />
              <NodeItem text="Improved Decision Support" />
              <NodeItem text="Enhanced User Experience" />
              <NodeItem text="Competitive Advantage" />
            </div>
          </div>
        </div>

      </div>

      {/* Continuous Improvement Cycle (Bottom Arrow) */}
      <div className="relative w-full max-w-7xl mt-12 z-10 hidden lg:block">
        <div className="h-8 border-b-2 border-l-2 border-r-2 border-primary/50 rounded-b-2xl flex items-end justify-center relative">
           <div className="absolute -left-3 top-0 text-primary/50 bg-surface-dim"><span className="material-symbols-outlined transform -rotate-90">play_arrow</span></div>
           <div className="absolute -right-3 top-0 text-primary/50 bg-surface-dim h-4 w-4"></div>
           <div className="bg-surface-dim px-6 text-[11px] font-semibold text-on-surface-variant uppercase tracking-widest translate-y-3">
             Continuous Improvement Cycle
           </div>
        </div>
      </div>

    </div>
  );
}

function NodeItem({ text, icon, className = "" }: { text: string, icon?: string, className?: string }) {
  return (
    <div className={`border border-outline-variant bg-[#141923] rounded-lg px-2 py-2 2xl:px-3 2xl:py-3 flex flex-col items-center justify-center text-center shadow-sm text-[11px] text-on-surface hover:border-primary/50 transition-colors ${className}`}>
      {icon && <span className="material-symbols-outlined text-on-surface-variant mb-2 text-[20px]">{icon}</span>}
      <span className="leading-snug break-words">{text}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center text-primary px-1 2xl:px-2 w-6 2xl:w-10">
      <svg className="w-full h-auto" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
