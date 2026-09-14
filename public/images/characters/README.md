# Character portraits

Twelve strongly stylised graphic novel illustrations appear on character cards and in the selected character panel during play. `app/character-portrait.tsx` selects each image by the character’s stable ID, including when the interface language changes.

## Current facial redesign

The second artwork pass replaces the earlier realistic interpretations with distinct fictional faces. Bold brush-ink contours, large simplified shapes, flat cel shading and restrained halftone replace photographic skin and lighting. Eye geometry and spacing, brows, noses, mouths, cheekbones, jaws and chins were deliberately redesigned; hairstyles, facial hair and eyewear were also changed where appropriate to reduce resemblance to the initial photographic references. Natural skin colours and the established character palettes guide the set.

The latest redraw uses the previous illustrations as palette references and the newly drawn Kwame portrait as a shared style reference. It does not aim to preserve the identities in the photographs. These illustrations are fictional character designs, not depictions of the source subjects’ lives or identities.

## Visual references

For the initial artwork pass, the user supplied [The Irish Times – New to the Parish on Facebook](https://www.facebook.com/NewToTheParish/). The corresponding [New to the Parish collection](https://www.irishtimes.com/tags/new-to-the-parish/) provided the portrait references. Kwame’s initial visual reference came from the third portrait in [Broadside: Ireland’s famed welcome faces a stern test](https://www.irishtimes.com/life-and-style/people/broadside-ireland-s-famed-welcome-faces-a-stern-test-1.2696849).

These are AI-generated graphic novel interpretations for fictional game characters. The source articles concern different people: the characters’ names, nationalities, circumstances and decision pathways are fictional, and are not biographies of the people in the reference photographs. No affiliation or endorsement is implied. Reference photographs remain the work of their respective photographers and publisher and are not included in this repository.

## Production

Created with the built-in Create Image tool, one generation per character. The complete redesign prompts and previous-artwork references are recorded in `generation.json`; the initial generation manifest remains in the linked Git history. The generated artwork was exported proportionally at 320 × 320 pixels in WebP with JPEG fallbacks. No original photographs are served by the game.

Each file uses a stable character ID: `kwame`, `mateo`, `farid`, `priya`, `mariam`, `sofia`, `valentina`, `noor`, `river`, `adama`, `elena`, `leila`.

Portraits reserve square space, retain the site’s character colours, and load lazily in the card list. The selected portrait loads eagerly. Both WebP and JPEG URLs include the artwork revision so browsers request the redesigned images after deployment. Images have empty alternative text because the adjacent visible character name supplies the accessible label.
