## Goal

Restore the Bridge Forward Collective project to the March 12, 4 PM version using only Lovable's built-in tools (no GitHub, no code changes).

## Why this isn't a code task

Reverting is a platform action in Lovable, not a code edit. Writing code to "undo" changes would create a new commit on top of current state, not restore the prior snapshot, and would likely miss files (deleted pages, prior `index.css`, prior components). The only reliable path is Lovable's History.

## Steps

1. **Open History**
   Use the action below (or click the clock icon at the top of the chat).

2. **Locate the March 12, ~4 PM entry**
   Entries are listed newest-first with timestamps. Scroll until you find the version dated March 12 around 4 PM. If multiple entries exist near that time, hover/click each to preview before restoring.

3. **Preview before restoring**
   Click the entry to load its preview. Confirm it matches the version you want (dark cyber aesthetic, original pages like `LegacyHouse`, `Scholarship`, `Services`, `TechCenter` present, no `ImpactRibbon`, no `/cyberplug` or `/institute`).

4. **Restore**
   Click **Restore** on that entry. Lovable will roll the project back to that snapshot. Current work after that point is archived in chat history, so nothing is permanently lost — any later AI message still has its own Restore button to bring those changes back.

5. **Verify the preview**
   After restore, confirm the preview shows the expected March 12 site (hero, nav, pages). If it doesn't match, repeat with an adjacent history entry.

## If March 12 isn't in History

Lovable's History retention is finite. If you scroll all the way down and March 12 isn't listed, the snapshot is no longer available through the preview path, and without GitHub there is no other recoverable source. In that case the options become:
- Pick the **closest available earlier entry** and restore that.
- Or stay on current state and manually re-add the specific pieces you want back (tell me which sections — hero copy, color palette, specific pages — and I'll rebuild them in Build mode).

## Launch History

<presentation-actions>
  <presentation-open-history>View History</presentation-open-history>
</presentation-actions>

Approve this plan and I'll stand by while you run the restore; tell me afterward whether March 12 was available so we know whether to restore or rebuild.
