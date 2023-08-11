---
theme: apple-basic
layout: center
class: text-center
---

# Symplex Technologies

<div class="pt-2">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    An innovating tech company <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Our Team
```mermaid
erDiagram
    CEO ||--o{ Andrei : leads
    CEO ||--o{ Matheo : leads
    CEO ||--o{ Thomas : leads
    CEO ||--o{ Oceane : leads
    CEO ||--o{ Pierre : leads
    CEO ||--o{ Clement : leads
    CEO ||--o{ Antonin : leads
    Thomas ||--o{ Marine : manages
    Thomas ||--o{ Lucas : manages
    Oceane ||--o{ Nathan : manages
    Antonin ||--o{ Maguy : manages
    Maguy ||--o{ Lisa : manages

    CEO {
        Axel
        R
    }
```

---

# Cardinal

<input type=text placeholder="Talk with Cardinal !" class="input"/>

<style>
  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 15px;
  }
</style>