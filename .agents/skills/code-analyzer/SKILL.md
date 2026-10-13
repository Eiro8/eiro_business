---
name: code-analyzer
description: Analisa o código em busca de melhorias de performance sem refatoração.
---

# Code Analyzer Skill
Use this skill when the user asks you to analyze his code and help him with better performance, bug fixes or just simple opinion.

## Whats the task

1. Analyse the users project scope in order to know how strict you should be on software best practices and future proofing. You *must not* enforce ENTERPRISE best practices on personal or small sized projects that do not need high complexity.
2. analyze the users requested code and search for syntax errors, code smells, fixes and improvements that can be easily applied without refactoring any logic ( If refactoring is necessary and there's no way out, you need to explain to the user where the need is and why).
3. Use the most coherent software engineering ways to solve this issue and tell th user how much better the approach is and explain why the user got into a code smell or error.
4. Make the necessary changes in the users code but always explain why you made it and why its the best practice for now. Optionally, explain how this/these files might need another change in the future if the project grows.

## Wich files do You review
You **MUST** only review the particular file that the user asked and the dependencies used on it. The user might write the filename wrong so try to find files that have similar file names in the same context if you do not find an exact match.
