# Printable Journal Generator

A mobile-friendly single-page web app for designing printable journal / notebook pages and exporting them as a PDF.
Imported from the "Printable Journal Generator" Claude artifact
(https://claude.ai/artifact/HQ3JtwKWkap8AyK4UqqLuw, version 1793907094-27a4).

Open `index.html` in a browser — no build step. jsPDF is loaded from cdnjs.

## Features (current state)

- **Page sizes:** ISO (A4–B6), US (Letter, Half Letter, Junior Legal, Quarter Letter),
  notebook sizes (Field Notes, pocket, Traveler's Notebook passport, large), or custom; mm or inches.
- **Templates:** dot grid, square grid, ruled lines (optional margin line), Cornell notes,
  checklist, daily planner (hour range, half hours, 12/24h, priorities, notes column),
  weekly planner (boxes or stacked rows, Monday/Sunday start), blank.
- **Styling:** spacing, line weight / dot size, darkness, ink colour.
- **Margins:** top/bottom/inner/outer, mirrored binding margins for double-sided printing.
- **Header/footer:** page title, date line, page numbers (outer/inner/centre, start number).
- **Imposition:** packs pages onto US Letter or A4 sheets (auto orientation), printer margin,
  gap, cut marks, fill the last sheet; scales down with a warning if a page doesn't fit.
- **Preview:** live SVG preview per page or per sheet, margin guides.
- **Save & share:** settings persist in localStorage, named presets, copy/paste settings JSON,
  save settings file, starter chips (A5 dot grid, Letter ruled, Cornell, daily, weekly, pocket grid).
- **Export:** PDF via jsPDF (uses the artifact `downloads` capability inside claude.ai,
  a normal browser download elsewhere).

The layout engine is exposed as `window.PJG` (`merge`, `diff`, `plan`, `buildPage`,
`buildSheet`, `toSVG`, `contentRect`) for testing.
