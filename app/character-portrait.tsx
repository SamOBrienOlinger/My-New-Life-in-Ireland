import type { Character } from "./journey-data";

const PORTRAIT_REVISION = "graphic-novel-v2";

export function CharacterPortrait({
  character,
  eager = false,
}: {
  character: Pick<Character, "id" | "tone">;
  eager?: boolean;
}) {
  return (
    <div className={"avatar avatar-" + character.tone} aria-hidden="true">
      <picture>
        <source srcSet={"images/characters/" + character.id + ".webp?v=" + PORTRAIT_REVISION} type="image/webp" />
        <img
          src={"images/characters/" + character.id + ".jpg?v=" + PORTRAIT_REVISION}
          alt=""
          width={320}
          height={320}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>
    </div>
  );
}
