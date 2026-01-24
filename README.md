# RAG Backend (TypeScript)

This project is an **industry-grade reimplementation of a Retrieval-Augmented Generation (RAG) system**, originally built during my DMRC internship in Python.

The original version was created before I had a strong understanding of backend architecture.  
This version focuses on **clean design, modularity, and deep understanding** using **TypeScript**.

---

## Why this project exists

- To rebuild a real RAG system from first principles
- To understand each RAG component deeply (not just use abstractions)
- To design a backend that is production-oriented and extensible

---

## What is RAG?

Retrieval-Augmented Generation (RAG) combines:
1. **Retrieval** – fetching relevant documents using vector search
2. **Generation** – using an LLM to answer strictly from retrieved context

---

## Architecture Overview

### Ingestion Phase (offline / admin)

PDF → Text → Chunks → Embeddings → Chroma Vector DB
### Query Phase (runtime)

User Query → Embedding → Vector Search
→ Context → Prompt → LLM → Answer
---

## Tech Stack

- **Language**: TypeScript
- **Backend**: Fastify
- **Embeddings**: OpenAI (primary), local options later
- **Vector DB**: Chroma (SQLite)
- **LLMs**: OpenAI GPT, Ollama
- **Data Source (initial)**: PDFs

---

## Folder Structure

- `ingestion/` – document loading and indexing
- `embeddings/` – embedding providers
- `vector/` – vector database client
- `llm/` – LLM providers
- `rag/` – retrieval + prompt + orchestration
- `routes/` – API endpoints

---

## Learning Goals

- Understand embeddings and similarity search
- Separate ingestion from querying
- Design swappable LLM and embedding providers
- Build a clean, stateless backend API
- Avoid hallucinations through grounded prompts

---

## Roadmap

- [x] PDF ingestion
- [ ] Text / Markdown ingestion
- [ ] API-based ingestion
- [ ] Streaming responses
- [ ] Metadata filtering
- [ ] Caching & optimization

