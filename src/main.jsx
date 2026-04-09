import React from 'react'
import ReactDOM from 'react-dom/client'

const sections = [
  ['Hero Briefing', 'Senior Software Engineer building AI systems, backend platforms, and automation workflows that move from concept to production.'],
  ['Why Perplexity', 'Production AI, APIs, customer-facing deployment, debugging, reliability, and cross-functional execution.'],
  ['Featured Deployments', 'CRM contact resolution agent, AI automation agents, GraphQL infrastructure, and workflow automation.'],
  ['Reliability Loop', 'Offline benchmarks, edge case simulations, human-in-the-loop feedback, stress/load testing.'],
  ['Systems Map', 'Python, C#, GraphQL, REST, .NET, AWS, Docker, Kafka, SQL, MongoDB, Solr.'],
  ['Leadership Signal', '700+ engineer AI strategy, mentoring, influence without authority, cross-team alignment.'],
  ['Closing Transmission', 'A direct message to Perplexity that frames you as someone who can ship durable applied AI.']
]

function App() {
  return <div style={{fontFamily:'Inter, system-ui, sans-serif', background:'#070B14', color:'#EAF0FF', minHeight:'100vh', padding:'40px'}}>
    <div style={{maxWidth:1100, margin:'0 auto'}}>
      <header style={{padding:'48px 0 32px', borderBottom:'1px solid #1C2640'}}>
        <div style={{letterSpacing:'.24em', textTransform:'uppercase', color:'#7CF7D4', fontSize:12}}>Mission Dossier</div>
        <h1 style={{fontSize:'clamp(40px, 8vw, 88px)', lineHeight:1, margin:'12px 0'}}>Sai Yeshala</h1>
        <p style={{maxWidth:760, fontSize:18, color:'#8F9BB7'}}>A futuristic portfolio tailored for Perplexity — built to show production AI deployment, backend depth, and cross-functional execution.</p>
      </header>
      <main style={{display:'grid', gap:16, padding:'28px 0 64px'}}>
        {sections.map(([title, body]) => <section key={title} style={{background:'linear-gradient(180deg, #0E1526, #111B31)', border:'1px solid #1C2640', borderRadius:20, padding:'24px 28px'}}>
          <div style={{letterSpacing:'.18em', textTransform:'uppercase', color:'#7AA7FF', fontSize:12, marginBottom:10}}>{title}</div>
          <p style={{margin:0, color:'#EAF0FF', fontSize:16, lineHeight:1.7}}>{body}</p>
        </section>)}
      </main>
    </div>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
