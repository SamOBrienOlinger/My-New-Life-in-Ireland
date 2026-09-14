# Character portraits

Twelve graphic novel illustrations replace the initials on character cards and in the selected character panel during play. `app/character-portrait.tsx` selects each image by the character’s stable ID, including when the interface language changes.

## Visual references

The user supplied [The Irish Times – New to the Parish on Facebook](https://www.facebook.com/NewToTheParish/). The corresponding [New to the Parish collection](https://www.irishtimes.com/tags/new-to-the-parish/) provided the portrait references. Kwame’s visual reference came from the third portrait in [Broadside: Ireland’s famed welcome faces a stern test](https://www.irishtimes.com/life-and-style/people/broadside-ireland-s-famed-welcome-faces-a-stern-test-1.2696849).

These are AI-generated graphic novel interpretations for fictional game characters. The source articles concern different people: the characters’ names, nationalities, circumstances and decision pathways are fictional, and are not biographies of the people in the reference photographs. No affiliation or endorsement is implied. Reference photographs remain the work of their respective photographers and publisher and are not included in this repository.

## Production

Created with the built-in Create Image tool. The complete prompts and reference-image URLs are recorded in `generation.json`. The generated artwork was exported proportionally at 320 × 320 pixels in WebP with JPEG fallbacks. No original photographs are served by the game.

Each file uses a stable character ID: `kwame`, `mateo`, `farid`, `priya`, `mariam`, `sofia`, `valentina`, `noor`, `river`, `adama`, `elena`, `leila`.

Portraits reserve square space, retain the site’s character colours, and load lazily in the card list. The selected portrait loads eagerly. Images have empty alternative text because the adjacent visible character name supplies the accessible label.
