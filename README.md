# Journal Lab

Make printable journal and planner pages at any size, lay them out on US Letter or A4 with cut marks, and download a PDF ready to print.

**Open the app:** https://docgonzo420.github.io/Journal-Lab/

- **Page styles:** dot grid, square grid, ruled lines, Cornell notes, checklist, daily planner, weekly planner, monthly calendar, blank
- **Sizes:** A4, A5 (Hobonichi Cousin), A6, B5, B6, US Letter, Half Letter, Junior Legal, Quarter Letter, Field Notes, Passport Travelers Notebook (89 × 124 mm), pocket and large notebooks, or any custom size
- **Printing:** as many pages as fit on each sheet, with cut marks, mirrored margins for double-sided books, titles, date lines and page numbers
- **Easier cutting and folding:** run dot grid, square grid or ruled patterns past the cut line (bleed) so a slightly-off cut still looks clean, and print booklet spreads (two pages side by side) with fold marks at the spine, or butt pages together so neighbours share cut lines (fewer cuts)
- **Booklets:** print spreads double-sided in saddle-stitch order, so the stack folds and staples into one booklet with the pages in reading order
- **Dated pages:** fill a month of daily or weekly pages with real dates, with a month calendar page first, or print monthly calendars
- **Ring holes:** punch marks for A5, Personal and Pocket six-ring planners, or a clear punch zone for disc-bound planners, with the page content kept away from the holes
- **Printer calibration:** a two-sided test sheet shows how much your printer cuts off at each edge and how far it shifts the front and back; enter the measurements and every PDF corrects for them
- **Share links:** send a link that opens Journal Lab with your exact page setup; your printer margin and calibration stay on your device
- **Works offline:** install it as an app on your phone or computer and it keeps working without a connection

Print the PDF at **100%** (or "Actual size"). "Fit to page" rescales the pages so they no longer match the size you picked.

## Install it as an app

 (`https://<your-user>.github.io/Journal-Lab/`) and:

- **iPhone or iPad (Safari):** tap Share, then **Add to Home Screen**. In the installed app, Download PDF opens the share sheet, where you can pick **Save to Files** or **Print**.
- **Android (Chrome):** tap **Install app** at the top of the page, or the ⋮ menu, then **Install app**.
- **Windows, Mac or Linux (Chrome or Edge):** click **Install app** at the top of the page, or the install icon in the address bar.

Saved presets live on each device. To move a setup between devices, open **Save and share** and copy the settings text, or save a settings file.

## How it's built

Everything runs in the browser; there's no server and no build step.

| File | What it does |
| --- | --- |
| `index.html` | The whole app: layout engine, preview and PDF export |
| `manifest.webmanifest` | App name, colours and icons for installing |
| `sw.js` | Service worker that saves the app for offline use |
| `icons/` | App icons, including a maskable icon for Android |
| `vendor/jspdf.umd.min.js` | [jsPDF](https://github.com/parallax/jsPDF) 2.5.1 (MIT licence, see `vendor/jspdf.LICENSE.txt`), kept here so PDF export works offline |

The installed app shows its saved copy immediately and fetches any update in the background, so changes appear the next time it opens. Bumping `VERSION` in `sw.js` makes installed copies download everything fresh.
