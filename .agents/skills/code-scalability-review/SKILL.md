---
name: code-scalability-review
description: Revisa o código do projeto em busca de gargalos de escalabilidade, performance, complexidade algorítmica e arquitetura para grandes volumes.
---

# Code Scalability Review Skill

Use esta skill quando o usuário solicitar uma revisão de escalabilidade, análise de gargalos de performance, gargalos de banco de dados, eficiência de renderização (React), ou arquitetura para grande volume de requisições no projeto.

## Diretrizes de Análise de Escalabilidade

1. **Complexidade e Algoritmos**:
   - Identifique laços aninhados desnecessários ($O(n^2)$ ou piores) em processamento de dados.
   - Avalie uso excessivo de memória em operações com arrays grandes (`map`, `filter`, `reduce` encadeados sem paginação ou streaming).
   - Verifique o uso de memoização (`useMemo`, `useCallback`) em componentes críticos de renderização no React.

2. **Gerenciamento de Estado e Re-renderizações**:
   - Identifique estados globais excessivos ou re-renders desnecessários de componentes filhos.
   - Avalie a separação correta entre componentes Server Components (RSC) e Client Components no Next.js para minimizar o bundle size no cliente.

3. **Banco de Dados, Requisições e I/O**:
   - Identifique problemas de *N+1 queries* ou falta de paginação/indexação em consultas.
   - Verifique o uso de estratégias de cache (SWR, React Query, Next.js ISR/Data Cache) para evitar chamadas de API repetidas.

4. **Formato da Resposta**:
   - Apresente os gargalos encontrados ordenados por criticidade (Alta, Média, Baixa).
   - Para cada ponto, aponte o arquivo/linha, o impacto potencial em escala e a sugestão de refatoração objetiva.
