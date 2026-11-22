---
title: "Dobór komponentów i pierwsze BOM"
date: 2026-11-22
category: "Elektronika"
area: hardware
version: "Rev A"
summary: "Wybrałem kluczowe układy i przygotowałem listę elementów do pierwszej rewizji płytki."
order: 1
---

Zanim GRZYBOL9000 trafi do lasu, trzeba zdecydować, z czego właściwie go zbudować. Zebrałem wymagania urządzenia, dobrałem najważniejsze elementy i przygotowałem **BOM (Bill of Materials)**, czyli listę komponentów projektu.

### Co wybrałem?

- **STM32L431CBT6** jako główny mikrokontroler.
- **Quectel L76-M33** jako moduł odbiornika GNSS.
- **TPS631000DRLR** jako przetwornicę buck-boost zapewniającą zasilanie 3,3 V.
- **MCP73833** do obsługi ładowania akumulatora Li-ion.
- **Ogniwo 18650** jako źródło energii oraz wyświetlacz i interfejsy potrzebne do obsługi lokalizatora.

Dobór części to nie tylko lista nazw. Każdy element musi pasować do założeń dotyczących zasilania, komunikacji, dostępnego miejsca na PCB i możliwości wykonania pierwszego prototypu.

**Status:** podstawowa BOM jest przygotowana. Lista może jeszcze zmienić się podczas końcowej kontroli schematu i projektowania PCB.
